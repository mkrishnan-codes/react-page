const gamesUrl = 'http://starlord.hackerearth.com/gamesext';
const headers = {
    'Content-Type': 'application/json',
    'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'access-control-allow-methods': 'GET, POST, PUT',
    'access-control-allow-origin': '*',
    'server': 'cloudflare-nginx'
};
export const GET = async (params) => {
    try {
        var url = new URL(gamesUrl);
        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        }
        let response = await fetch(url, { headers });
        let data = await response.json()
        return data;
    } catch (e) {
        console.log(e, 'ERROR');
        return null;
    }
}

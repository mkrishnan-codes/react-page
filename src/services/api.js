const gamesUrl = '/deployed-api/search/';
const headers = {
    // 'Content-Type': 'application/json',
    // 'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'access-control-allow-methods': 'GET, POST, PUT',
    // 'access-control-allow-origin': '*',
    // 'server': 'cloudflare-nginx'
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',

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

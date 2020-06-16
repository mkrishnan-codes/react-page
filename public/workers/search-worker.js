/*
REQUEST
{
	array,
	filtercondition
}
RESPONSE
{
	error,
	success
}

*/

onmessage = (e) => {
	try {
		const { array,
			filter } = e.data;
		const success = array.filter(item => item.title.toLowerCase().search(filter.toLowerCase() > -1))
		// var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
		console.log('Posting message back to main script');
		// postMessage(workerResult);
		postMessage({ error: false, success });

	} catch (error) {
		postMessage({ error, success: false });
	}


}
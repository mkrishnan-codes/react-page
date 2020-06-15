import { take, actionChannel, call, fork, put, apply } from 'redux-saga/effects'
import { searchRequest, getSearchResultSuccess } from '../reducers/items-reducer'
import { eventChannel } from 'redux-saga';
let searchWorker;
function* handleRequest(payload) {
	yield call(searchWorker.postMessage(payload))
}
// this function creates an event channel from a given socket
// Setup subscription to incoming `ping` events
function createSocketChannel(searchWorker) {
	// `eventChannel` takes a subscriber function
	// the subscriber function takes an `emit` argument to put messages onto the channel
	return eventChannel(emit => {

		const pingHandler = (event) => {
			// puts event payload into the channel
			// this allows a Saga to take this payload from the returned channel
			console.log(event.payload, 'Recieved')
			emit(event.payload)
		}

		const errorHandler = (errorEvent) => {
			// create an Error object and put it into the channel
			emit(new Error(errorEvent.reason))
		}

		// setup the subscription
		searchWorker.onmessage = pingHandler;
		searchWorker.onerror = errorHandler;

		// the subscriber must return an unsubscribe function
		// this will be invoked when the saga calls `channel.close` method
		const unsubscribe = () => {
			searchWorker.terminate();
		}

		return unsubscribe
	})
}
// reply with a `pong` message by invoking `socket.emit('pong')`
function* pong(socket) {
	yield apply(socket, socket.emit, ['pong']) // call `emit` as a method with `socket` as context
}
const createConnection = () => {
	searchWorker = new Worker('../workers/search-worker.js');
	return searchWorker;
}
export function* watchWorkerMessages() {
	const socket = yield call(createConnection)
	const socketChannel = yield call(createSocketChannel, socket)

	while (true) {
		try {
			// An error from socketChannel will cause the saga jump to the catch block
			const payload = yield take(socketChannel)
			yield put({ type: getSearchResultSuccess.type, payload })
			yield fork(pong, socket)
		} catch (err) {
			console.error('socket error:', err)
			// socketChannel is still open in catch block
			// if we want end the socketChannel, we need close it explicitly
			// socketChannel.close()
		}
	}
}
export function* watchActionMessage() {
	// 1- Create a channel for request actions
	const requestChan = yield actionChannel(searchRequest.type)
	while (true) {
		// 2- take from the channel
		const { payload } = yield take(requestChan)
		// 3- Note that we're using a blocking call
		yield call(handleRequest, payload)
	}
}
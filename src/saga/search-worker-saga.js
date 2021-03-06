// import { take, call, eventChannel, put } from "redux-saga"
import { take, call, put, takeLatest, select } from 'redux-saga/effects';
import { searchRequest, getSearchResultSuccess } from '../reducers/items-reducer'
import { eventChannel } from 'redux-saga';
const wsUrl = './workers/search-worker.js'

const ws = new Worker(wsUrl)


export const post = (msg) => ws.postMessage(msg);


function initWebsocket() {
	return eventChannel(emitter => {
		ws.onerror = (error) => {
			console.log('Worker error ' + error)
			console.dir(error)
		}
		ws.onmessage = (e) => {
			let msg = null
			try {
				// console.error(e.data)
				// msg = JSON.parse(e.data)
				msg = e.data;
			} catch (e) {
				console.error(`Error parsing : ${e.data}`)
			}
			if (msg) {
				const { payload: success } = msg
				// const channel = msg.channel
				// switch (channel) {
				// 	case 'ADD_BOOK':
				// 		return emitter({ type: 'ADD_BOOK', book })
				// 	case 'REMOVE_BOOK':
				// 		return emitter({ type: 'REMOVE_BOOK', book })
				// 	default:
				// 	// nothing to do
				// }
				if (success) {
					return emitter({ type: getSearchResultSuccess.type, success })
				}
			}
		}
		// unsubscribe function
		return () => {
			ws.terminate()
			console.log('Socket off')
		}
	})
}
function* doSendToWorker(action) {
	try {
		const array = yield select(state => state.items.data);
		const payload = { filter: action.payload, array }
		const res = yield call(post, payload)
		yield put({ type: 'POSTED', res })
	} catch (e) {
		console.log(e, 'Error');

		yield put({ type: 'ERROR', error: e.json })
	}
}

export function* workerRecieverSaga() {
	const channel = yield call(initWebsocket)
	while (true) {
		const action = yield take(channel)
		yield put(action)
	}
}
export function* workerSenderSaga() {
	yield takeLatest(searchRequest.type, doSendToWorker);
}

import { put, takeLatest, call } from 'redux-saga/effects';
import { getItems, getItemsSuccess } from '../reducers/items-reducer';
import { GET } from '../services/api';

function* doGetItems(action) {
	try {
		const { hits } = yield call(GET, { tags: 'front_page', page: 0 })
		yield put({ type: getItemsSuccess.type, payload: hits })
	} catch (e) {
		console.log(e, 'Error');

		yield put({ type: 'ERROR', error: e.json })
	}
}

function* itemsSaga() {
	yield takeLatest(getItems.type, doGetItems);
}
export default itemsSaga;
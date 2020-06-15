import { fork, all } from 'redux-saga/effects';
import authSaga from './auth-saga';
import itemsSaga from './items-saga';
import { watchActionMessage, watchWorkerMessages } from './search-worker-saga';

export default function* rootSaga() {
	yield all([
		fork(authSaga),
		fork(itemsSaga),
		fork(watchActionMessage),
		fork(watchWorkerMessages),
	]);
}
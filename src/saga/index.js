import { fork, all } from 'redux-saga/effects';
import authSaga from './auth-saga';
import itemsSaga from './items-saga';
import { workerRecieverSaga, workerSenderSaga } from './search-worker-saga';

export default function* rootSaga() {
	yield all([
		fork(authSaga),
		fork(itemsSaga),
		fork(workerRecieverSaga),
		fork(workerSenderSaga),
	]);
}
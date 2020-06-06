import { fork, all } from 'redux-saga/effects';
import authSaga from './auth-saga';
import itemsSaga from './items-saga';

export default function* rootSaga() {
    yield all([
        fork(authSaga),
       fork(itemsSaga),
    ]);
}
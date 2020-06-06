import {put, takeLatest, delay } from 'redux-saga/effects';
import { SignIn, signInSuccess } from '../reducers/auth-reducer';
// import { signin, getAuthUser, refresh, signup, resetPassword } from '../services/auth'
// import { getDataFromLocal, LOCAL_STORE_KEYS, saveDataToLocal, removeDataFromLocal } from '../util/local-storage';
// import { GET, replaceUrlVariables, PUT } from '../services/api';
// import { CUSTOMER_ID_ACCESS, USER, USER_SINKS, USER_SETTINGS, USER_SINK, USER_SETTING } from '../configs/url';
// import { ExtendedAuthResponse } from '../reducers/types';
// import { hasTokenExpired, getExpiry } from '../util/utils';
// import { getUserIdFromStore } from '../util/saga-store-access-utils';
// import { MessageActionType } from '../constants/message-constants';

function* doSignIn(action) {
	try {
		yield delay(2000)
		yield put({ type: signInSuccess.type })
	} catch (e) {
		yield put({ type: 'ERROR', error: e.json, message: e.json['error_description'] })
	}
}

function* authSaga() {
	yield takeLatest(SignIn.type, doSignIn);
}
export default authSaga;
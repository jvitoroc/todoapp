import { put, takeEvery, call } from 'redux-saga/effects'
import {LOGIN, LOGOUT, loginSucceeded, loginFailed, logoutSucceeded, logoutFailed} from "../actions/auth";
import {token} from "../resources/";

function* loginUser({username, password, resolve, reject}) {
  try {
    const data = yield call(token.createToken, {username, password})
    yield put(loginSucceeded(data));
    resolve(data);
  }catch (error) {
    reject(error);
    yield put(loginFailed(error.data, error.status))
  }
}

function* logoutUser() {
  try {
    const data = yield call(token.revokeToken)
    yield put(logoutSucceeded(data));
  }catch (error) {
    yield put(logoutFailed(error.data))
  }
}

function* watchAuth() {
  yield takeEvery(LOGIN, loginUser)
  yield takeEvery(LOGOUT, logoutUser)
}

export {
  loginUser,
  logoutUser,
  watchAuth
}
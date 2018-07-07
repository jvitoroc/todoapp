import { put, takeEvery, call } from 'redux-saga/effects'
import {token} from "../resources/";

function* loginUser({username, password}) {
  try {
    const data = yield call(token.createToken, {username, password})
    yield put({type: "LOGIN_SUCCEEDED", data})
  }catch (error) {
    yield put({type: "LOGIN_FAILED", error})
  }
}

function* logoutUser({description}) {
    yield put({ type: 'ADD_TODO', description})
  }

function* watchAuth() {
  yield takeEvery('LOGIN', loginUser)
  yield takeEvery('LOGOUT', logoutUser)
}

export {
  loginUser,
  logoutUser,
  watchAuth
}
import { watchAddTodo } from "./todo";
import { watchAuth } from "./auth";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchAuth()
  ]);
}
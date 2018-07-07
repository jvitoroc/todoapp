import { watchAddTodo } from "./todo";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchAddTodo()
  ]);
}
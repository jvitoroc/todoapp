import { put, takeEvery } from 'redux-saga/effects'

function* addTodo({description}) {
  yield put({ type: 'ADD_TODO', description})
}

function* watchAddTodo() {
  yield takeEvery('ADD_TODO', addTodo)
}

export {watchAddTodo, addTodo}
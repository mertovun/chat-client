import { put, takeEvery, delay } from 'redux-saga/effects';
import { helloAction, ActionTypes } from '../actions';

export function* watchHello() {
  yield takeEvery(ActionTypes.HELLO, dispatchHello);
}

function* dispatchHello() {
  yield delay(1000);
  yield put(helloAction());
}

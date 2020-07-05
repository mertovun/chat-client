import { all, fork } from 'redux-saga/effects';
import { watchHello } from './helloSaga';

export const rootSaga = function* root() {
  yield all([fork(watchHello)]);
};

import { all, fork } from 'redux-saga/effects';
import { watchCreateRoom, watchJoinRoom } from './chatSaga';

export const rootSaga = function* root() {
  yield all([fork(watchCreateRoom), fork(watchJoinRoom)]);
};

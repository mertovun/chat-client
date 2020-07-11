import { takeEvery, put, call } from 'redux-saga/effects';
import { eventChannel, Subscribe, Unsubscribe } from 'redux-saga';
import {
  ActionTypes,
  createRoomAction,
  joinRoom,
  joinRoomAction,
} from '../actions';
import socketIOClient, { Socket } from 'socket.io-client';
import { EventTypes } from '../EventTypes';

const url = 'http://localhost:3001/';

export function* watchCreateRoom() {
  yield takeEvery(ActionTypes.CREATE_ROOM, createRoomSaga);
}

export function* watchJoinRoom() {
  yield takeEvery(ActionTypes.JOIN_ROOM, joinRoomSaga);
}

function* joinRoomSaga(action: joinRoomAction) {
  console.log(action.payload);
  const socket = yield call(join, action.payload.nspId);
  if (socket) {
    console.log(socket.id + ' connected /' + action.payload);
  } else console.log('connectError');
}

function* createRoomSaga(action: createRoomAction) {
  const nspId = yield call(create);
  if (nspId) {
    action.payload.replace('/' + nspId);
    //yield put(joinRoom(nspId, action.payload));
  } else console.log('createError');
}

function create() {
  const socket = socketIOClient(url);
  return new Promise((resolve) => {
    socket.on(EventTypes.ROOM_CREATED, (data: any) => {
      console.log(socket.id + ' created room /' + data.nspId);
      resolve(data.nspId);
    });
  });
}

function join(nspId: string) {
  const socket = socketIOClient(url + nspId);

  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket: typeof Socket) {
  return eventChannel((emit) => {
    return () => {};
  });
}

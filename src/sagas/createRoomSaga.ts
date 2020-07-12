import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { eventChannel, Subscribe, Unsubscribe } from 'redux-saga';
import { ActionTypes, createRoomAction, joinRoomAction } from '../actions';
import socketIOClient, { Socket } from 'socket.io-client';
import { EventTypes } from '../EventTypes';

const url = 'http://localhost:3001';

export function* watchCreateRoom() {
  yield takeEvery(ActionTypes.CREATE_ROOM, workerCreateRoom);
}

export function* watchJoinRoom() {
  yield takeEvery(ActionTypes.JOIN_ROOM, workerJoinRoom);
}

function* workerCreateRoom(action: createRoomAction) {
  const nspId = yield call(create);
  if (nspId) {
    const history = action.payload;
    history.replace('/' + nspId);
  } else console.log('createError');
}

function* workerJoinRoom(action: joinRoomAction) {
  const socket = yield call(join, action.payload.nspId);
  if (socket) {
    // subscribe
    console.log(socket);
    const channel = yield fork(subscribe, socket);
    console.log(channel);
    while (true) {
      const action = yield take(ActionTypes.SEND_MESSAGE);
      const message = action.payload;
      yield call(sendMessage, message, socket);
      yield put(action); // TODO: handle MESSAGE action in the reducer & handle
    }
  } else console.log('connectError');
}

function sendMessage(msg: string, socket: typeof Socket) {
  console.log(msg);
  console.log(socket);
  socket.emit(EventTypes.MESSAGE, msg);
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
      console.log(socket.id + ' connected to ' + nspId);
      resolve(socket);
    });
  });
}

function subscribe(socket: typeof Socket) {
  return eventChannel((emit) => {
    socket.on('connect-error', () => {
      console.log(socket.id + ' connect-error');
    });
    socket.on(EventTypes.ROOM_DATA, (data: any) => {
      console.log(data);
    });
    socket.on(EventTypes.SYSTEM_MESSAGE, (data: any) => {
      console.log(data);
    });
    socket.on(EventTypes.MESSAGE_SENT, (data: any) => {
      console.log(data); // TODO: emit MESSAGE SENT action and handle in the reducer
    });
    socket.on(EventTypes.MESSAGE_RECEIVED, (data: any) => {
      console.log(data); // TODO: emit MESSAGE RECEIVED action and handle in the reducer
      //emit();
    });
    return () => {};
  });
}

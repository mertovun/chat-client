import { ActionTypes } from './types';
import { History } from 'history';
import { Socket } from 'socket.io-client';

export * from './types';

export interface createRoomAction {
  type: ActionTypes.CREATE_ROOM;
  payload: History;
}

export interface joinRoomAction {
  type: ActionTypes.JOIN_ROOM;
  payload: {
    nspId: string;
  };
}

export interface sendMessageAction {
  type: ActionTypes.SEND_MESSAGE;
  payload: string;
}

export const createRoom = (history: History): createRoomAction => ({
  type: ActionTypes.CREATE_ROOM,
  payload: history,
});

export const joinRoom = (nspId: string): joinRoomAction => ({
  type: ActionTypes.JOIN_ROOM,
  payload: {
    nspId,
  },
});

export const sendMessage = (msg: string): sendMessageAction => ({
  type: ActionTypes.SEND_MESSAGE,
  payload: msg,
});

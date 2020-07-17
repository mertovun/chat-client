import { ActionTypes } from './types';
import { History } from 'history';
import { Socket } from 'socket.io-client';
import { Message } from '../reducers/roomReducer';

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
  payload: Message;
}

export interface messageSentAction {
  type: ActionTypes.MESSAGE_SENT;
  payload: Message;
}

export interface updateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: string;
}

export interface updateRoomAction {
  type: ActionTypes.UPDATE_ROOM;
  payload: {};
}

export interface messageReceivedAction {
  type: ActionTypes.MESSAGE_RECEIVED;
  payload: Message;
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

export const message = () => ({
  type: ActionTypes.MESSAGE,
});

export const sendMessage = (payload: Message): sendMessageAction => ({
  type: ActionTypes.SEND_MESSAGE,
  payload,
});

export const messageSent = (payload: Message): messageSentAction => ({
  type: ActionTypes.MESSAGE_SENT,
  payload,
});

export const messageReceived = (payload: Message): messageReceivedAction => ({
  type: ActionTypes.MESSAGE_RECEIVED,
  payload,
});

export const updateUser = (payload: string): updateUserAction => ({
  type: ActionTypes.UPDATE_USER,
  payload,
});

export const updateRoom = (payload: {}): updateRoomAction => ({
  type: ActionTypes.UPDATE_ROOM,
  payload,
});

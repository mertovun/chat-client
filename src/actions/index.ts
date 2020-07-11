import { ActionTypes } from './types';
import { History } from 'history';

export * from './types';

export interface createRoomAction {
  type: ActionTypes.CREATE_ROOM;
  payload: History;
}

export interface joinRoomAction {
  type: ActionTypes.JOIN_ROOM;
  payload: {
    nspId: string;
    history: History;
  };
}

export const createRoom = (history: History): createRoomAction => ({
  type: ActionTypes.CREATE_ROOM,
  payload: history,
});

export const joinRoom = (nspId: string, history: History): joinRoomAction => ({
  type: ActionTypes.JOIN_ROOM,
  payload: {
    nspId,
    history,
  },
});

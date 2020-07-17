import { ActionTypes } from '../actions';

interface Action {
  type: ActionTypes;
  payload?: any;
}

export interface Room {
  userId: string;
  roomId: string;
  messages: Message[];
  users: any;
}
interface User {
  nickname?: string;
  color?: string;
}
export interface Message {
  userId: string;
  msg: string;
  timestamp: number | null;
}

export interface SysMsg {
  userId?: string;
  msg: string;
}

const userIdReducer = (
  state: string = '',
  { type, payload }: Action
): string => {
  switch (type) {
    case ActionTypes.UPDATE_USER:
      const id = payload;
      return id;
    default:
      return state;
  }
};

const roomIdReducer = (
  state: string = '',
  { type, payload }: Action
): string => {
  switch (type) {
    case ActionTypes.JOIN_ROOM:
      const id = payload.nspId;
      return id;
    default:
      return state;
  }
};

const messagesReducer = (
  state: Message[] = [],
  { type, payload }: Action
): Message[] => {
  switch (type) {
    case ActionTypes.MESSAGE_RECEIVED:
      return [...state, payload];
    case ActionTypes.MESSAGE_SENT:
      const index = state.findIndex(
        (msg) =>
          msg.userId === payload.userId &&
          msg.msg === payload.msg &&
          msg.timestamp === null
      );
      if (index >= 0) state[index].timestamp = payload.timestamp;
      return [...state];
    case ActionTypes.SEND_MESSAGE:
      return [...state, payload];
    default:
      return state;
  }
};

const usersReducer = (state: {}, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.UPDATE_ROOM:
      return { ...payload };

    default:
      return state;
  }
};

const initialState: Room = {
  userId: '',
  roomId: '',
  messages: [],
  users: [],
};

export const roomReducer = (
  state: Room = initialState,
  action: Action
): Room => ({
  userId: userIdReducer(state.userId, action),
  roomId: roomIdReducer(state.roomId, action),
  messages: messagesReducer(state.messages, action),
  users: usersReducer(state.users, action),
});

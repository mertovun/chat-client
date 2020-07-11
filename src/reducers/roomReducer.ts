import { ActionTypes } from '../actions';

const initialState: Room = {
  id: '',
  messages: [],
  users: [],
};

interface Action {
  type: ActionTypes;
  payload?: any;
}

export interface Room {
  id: string;
  messages: Message[];
  users: User[];
}
interface User {}
interface Message {}

export const roomReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionTypes.ROOM_CREATED:
      const id = payload;
      return { ...state, id };

    default:
      return state;
  }
};

import { ActionTypes, HelloAction } from '../actions';

const initialState = 0;

export const helloReducer = (
  state = initialState,
  { type }: HelloAction
): number => {
  switch (type) {
    case ActionTypes.HELLO:
      return state + 1;
    default:
      return state;
  }
};

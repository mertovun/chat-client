import { ActionTypes } from './types';

export * from './types';

export interface HelloAction {
  type: ActionTypes.HELLO;
}

export const helloAction = (): HelloAction => ({
  type: ActionTypes.HELLO,
});

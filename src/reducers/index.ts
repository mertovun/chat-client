import { combineReducers, Reducer } from 'redux';
import { helloReducer } from '../reducers/helloReducer';

export interface State {
  hello: number;
}

export const reducers: Reducer<State> = combineReducers({
  hello: helloReducer,
});

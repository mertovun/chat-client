import { combineReducers, Reducer } from 'redux';
import { helloReducer } from '../reducers/helloReducer';

export interface StoreState {
  hello: number;
}

export const reducers: Reducer<StoreState> = combineReducers({
  hello: helloReducer,
});

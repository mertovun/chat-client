import { combineReducers, Reducer } from 'redux';
import { Room, roomReducer } from './roomReducer';

export interface StoreState {
  room: Room;
}

export const reducers: Reducer<StoreState> = combineReducers({
  room: roomReducer,
});

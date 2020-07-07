import socketIOClient from 'socket.io-client';
import { EventTypes } from '../EventTypes';

const url = 'http://localhost:3001/';

export default () => {
  let socket = socketIOClient(url);

  socket.on(EventTypes.ROOM_CREATED, (data: any) => {
    if (data.nspId) socket = socketIOClient(url + data.nspId);
    socket.on('connect', () => {
      console.log('connected /' + data.nspId);
    });
    socket.on('connect_error', (err: string) => {
      console.log('connect_error /' + data.nspId + ' - ' + err);
    });
  });
  socket.on('connect_error', (err: string) => {
    console.log('connect_error / - ' + err);
  });
};

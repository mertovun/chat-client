import socketIOClient from 'socket.io-client';

const url = 'http://localhost:3001';

export default () => {
  const socket = socketIOClient(url);
  socket.emit('greetings', { data: 'helloooo from client' });
  socket.on('greetings', (data: any) => {
    console.log(data);
  });
};

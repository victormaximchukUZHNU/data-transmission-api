const io = require('socket.io');

const clientHost = require('../config/connections').CLIENT_URL[process.env.NODE_ENV];

module.exports = (http) => {
  const socketIO = io(http, {
    allowEIO3: true,
    cors: {
      origin: clientHost,
      methods: ["GET", "POST"],
      transport: ['websocket'],
      credentials: true
    }
  });

  socketIO.on('connection', (socket) => {
    socket.on('chatConnected', (roomId) => {
      socket.join(roomId);
    });

    socket.on('participantConnected', (params) => {
      socket.to(params.roomId).emit('participantConnected', params.senderId);
    });
    
    socket.on('message', (params) => {
      socket.to(params.roomId).emit('message', { 
        message: params.message,
        senderId: params.senderId
      });
    });
  });
};

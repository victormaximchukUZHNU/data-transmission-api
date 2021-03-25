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
    socket.on('chat connected', (roomId) => {
      socket.join(roomId);
    })
  
    socket.on('message', (params) => {
      socket.to(params.roomId).emit('message', { 
        message: params.message,
        senderId: params.senderId
      });
    });
  });
};

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
      socket.to(params.roomId).emit('participantConnected', params);
    });

    socket.on('participantDisconnected', (params) => {
      socket.to(params.roomId).emit('participantDisconnected', params.senderId);
    });
    
    socket.on('message', (params) => {
      socket.to(params.roomId).emit('message', params);
    });

    socket.on('videoChatOffer', (params) => {
      socket.to(params.roomId).emit('videoChatOffer', params);
    });

    socket.on('videoChatAnswer', (params) => {
      socket.to(params.roomId).emit('videoChatAnswer', params);
    });

    socket.on('newICECandidate', (params) => {
      socket.to(params.roomId).emit('newICECandidate', params);
    });

    socket.on('cameraAction', (params) => {
      socket.to(params.roomId).emit('cameraAction', params);
    });

    socket.on('microphoneAction', (params) => {
      socket.to(params.roomId).emit('microphoneAction', params);
    });
  });
};

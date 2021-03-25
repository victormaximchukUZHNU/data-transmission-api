const mongoose = require('mongoose');
const RoomSchema = require('./room.schema');

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
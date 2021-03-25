const Room = require('../../../models/room.model');

const { generateError } = require('../helpers');

module.exports = async (shortId) => {
  const room = await Room.findOne({ shortId }).lean();

  if (!room) {
    throw generateError('Room not found!', 404);
  }

  return room;
};

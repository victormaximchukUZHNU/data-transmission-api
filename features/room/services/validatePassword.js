const bcrypt = require('bcrypt');

const Room = require('../../../models/room.model');

const { generateError } = require('../helpers');

module.exports = async (params) => {
  const { shortId, password } = params;

  const room = await Room.findOne({ shortId }).lean();

  if (!room) {
    throw generateError('Room not found', 404);
  }

  const isMatch = await bcrypt.compare(password, room.password);

  if (!isMatch) {
    throw generateError('Wrong password', 401);
  }

  return { message: 'success' };
};

const Room = require('../../../models/room.model');

const { generateShortId } = require('../helpers');

module.exports = async () => {
  const shortId = generateShortId();

  const room = await Room.create({ shortId });

  return room;
};
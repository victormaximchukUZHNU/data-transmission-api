const bcrypt = require('bcrypt');

const Room = require('../../../models/room.model');

const { generateShortId } = require('../helpers');

module.exports = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const shortId = generateShortId();

  const room = await Room.create({ shortId, password: hashedPassword });

  return room;
};

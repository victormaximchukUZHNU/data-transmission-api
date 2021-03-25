const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true
  },
}, {
  collection: 'room',
  versionKey: false
});

module.exports = RoomSchema;

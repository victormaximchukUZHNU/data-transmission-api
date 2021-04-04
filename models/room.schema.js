const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'room',
  versionKey: false,
  timestamps: true
});

module.exports = RoomSchema;

const express = require('express');

const room = require('./features/room');

const router = express.Router();

router.use('/api', room);

module.exports = router;

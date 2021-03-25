const express = require('express');

const router = express.Router();

router.get('/room/:id', require('./methods/show'));

router.post('/room', require('./methods/create'));

module.exports = router;
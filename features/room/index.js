const express = require('express');

const router = express.Router();

router.get('/room/:id', require('./methods/show'));
router.get('/room/:id/validate-password', require('./methods/validatePassword'));

router.post('/room', require('./methods/create'));

module.exports = router;

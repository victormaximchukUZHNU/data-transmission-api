const { DB_URL } = require('./config/connections');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http').Server(app);

const router = require('./router');
const chat = require('./sockets/chat.socket');

app.use(cors());
app.use(router);

chat(http);

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

http.listen(3000, () => {
  console.log('listening on *:3000');
});
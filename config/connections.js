const localIp = require('local-ip')('wlp2s0');

module.exports = {
  DB_URL: 'mongodb+srv://admin:N9R98NcFWzF5AyN@datatransmissioncluster.caqqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  CLIENT_URL: {
    development: [`http://${localIp}:8080`, 'http://localhost:8080'],
    production: ['http://data-transmission-web.herokuapp.com', 'https://data-transmission-web.herokuapp.com']
  }
};

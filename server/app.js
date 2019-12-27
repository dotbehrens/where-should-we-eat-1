const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('./router');
const passportSetup = require('./config/passport-setup');

// call express
const app = express();

// call middleware functions
app.use(bodyParser.json());
app.use(cors());

// serve static assets
const CLIENT_PATH = path.resolve(__dirname, '../build');
app.use(express.static(CLIENT_PATH));
// send users to main index page on all endpoints
app.get('/*', (req, res) => {
  res.render(path.join(__dirname, 'build', 'index.html'));
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// api routers from router.js
// app.use('/api', router);
module.exports.app = app;

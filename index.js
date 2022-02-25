'use strict'

const express   = require('express');
const cors      = require('cors');

const app = express();

app.use('/status', require('./routes/Status').router)

const port = process.env.PORT || 5000;
const server = require('http').createServer(app);

server.listen(port, () => console.log(`Mock Server running on port ${port}`));
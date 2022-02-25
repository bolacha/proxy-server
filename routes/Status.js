'use strict'
const express = require('express');
const router = express.Router();

router.all('/', (req, res) => res.send({ message: `Server is up ! Current time : ${new Date()}`}))

module.exports = {
    router
}
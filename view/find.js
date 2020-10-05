const express = require('express');
const app = express.Router();

const { findRoomId } = require('../controller/mongo');

app.get('/find', findRoomId);

module.exports = app;
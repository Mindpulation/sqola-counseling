const express = require('express');
const app = express.Router();

const {findList} = require('../validator/index');

const { findRoomId } = require('../controller/mongo');

app.get('/find', findList, findRoomId);

module.exports = app;
const express = require('express');
const app = express.Router();
const { inList } = require('../validator/index');

const { insertData } = require('../controller/mongo');

app.post('/insert', inList, insertData);

module.exports = app;
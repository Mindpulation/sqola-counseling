const express = require('express');
const app = express.Router();

const { insertData } = require('../controller/mongo');

app.post('/insert', insertData);

module.exports = app;
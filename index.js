const express = require('express');
const cors = require('cors');
const http = require('http');
const conn = require('./env/index');

const app = express();
const insert = require('./view/insert');
const find = require('./view/find');

app.use(express.json());
app.use(cors());


app.use("/api/counseling", insert);
app.use("/api/counseling", find);
app.all( "*", (req, res)=>{res.send({res:"Fuck you!!"});} );

const server = http.createServer(app);
server.listen(conn.PORT);
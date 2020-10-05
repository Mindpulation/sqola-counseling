const Mongo = require('mongooo').Mongooo;
const conn = require('../env/index');

const { save } = require('mongooo').Save;
const { findOne } = require('mongooo').Find;
const { generateDate } = require('./helper');

const mongo = new Mongo();
let con;

(async() => {
    con = await mongo.setup(conn.MONGO_URL, conn.MONGO_DB, conn.MONGO_COL);
})();


const insertData = async (req, res) => {
    const param = generateDate(req.body);
    const data = await save(con, param);
    res.send(data).status(200);
}

const findRoomId = async (req, res) => {
    const { find, field} = req.body;
    const data = await findOne(con, find, field);
    (data === null) ? res.send(false) : res.send(true);
}


module.exports = { insertData, findRoomId}


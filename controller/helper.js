const { array } = require("joi");

const generateDate = (obj = {}) => {
    const tanggal = new Date();
    obj.date = tanggal;
    return obj;
} 

module.exports = {generateDate}
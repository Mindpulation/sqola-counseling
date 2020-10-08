const joi = require('joi');

const insert = joi.object().keys({
    room: joi.string().required(),
    listChat: joi.object().keys({
        pengirim: joi.string().required(),
        pesan: joi.string().required(),
        attachment: joi.string().required()
    }),
    status: joi.boolean().required()
});

const find = joi.object().keys({
    find: joi.object().required(),
    field: joi.object().required()
});

module.exports = { insert, find }
const {insert, find} = require('./schema');

const inList = (req, res, next) => {    
  const {value,error} = insert.validate(req.body)  
  if(error === undefined){next();}
  else{res.send({res:"Salah Format"}).status(304);}
}

const findList = (req,res,next) => {
  const {value, error} = find.validate(req.body);
  (error === undefined) ? next() : res.send({res:"Salah Format"}).status(304);
}


module.exports = {inList, findList};
var express = require('express');
var router = express.Router();

const os = require('os')
const path = require('path')
const { add, subtract } = require('../services/math')

console.log(os.type())
console.log(os.version())
console.log(path.parse(__filename))
console.log(add(1,2))
console.log(subtract(199,200))


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a card now');
});

module.exports = router;

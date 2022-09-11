const express = require('express');
const { LstTwilio } = require('../public/data');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', {lstTwilio: LstTwilio});
});

module.exports = router;

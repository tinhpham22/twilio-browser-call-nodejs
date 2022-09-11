const express = require('express');
const router = express.Router();

// GET /user
router.get('/', function(req, res, next) {
  res.render('users/index');
});

module.exports = router;

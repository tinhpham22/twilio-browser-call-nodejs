const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket');
const { LstTwilio } = require('../public/data');


// GET /dahsboard
router.get('/', function (req, res) {
  Ticket.find()
    .then(function (tickets) {
      res.render('dashboard/index', { tickets: tickets, lstTwilio: LstTwilio });
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST /tickets/new
router.post('/new', function (req, res) {
  var userName = req.body.userName;
  var phoneNumber = req.body.phoneNumber;
  var identity = req.body.identity;
  var appSid = req.body.appSid;
  var apiKey = req.body.apiKey;
  var apiSecret = req.body.apiSecret;
  var accountSid = req.body.accountSid;
  var twilioPhone = req.body.twilioPhone;
  var createdAt = new Date();

  if (!userName || !phoneNumber || !identity || !appSid || !apiKey || !apiSecret || !accountSid || !twilioPhone ) {
    return res.status(400).send('name, description and phoneNumber fields are required.')
  }
  User.create({ userName, phoneNumber, identity, appSid, apiKey, apiSecret, accountSid, twilioPhone, createdAt })
    .then(function (savedTicket) {
      req.flash('success', 'Your ticket was submitted! An agent will call you soon.');
      return res.status(201)
        .end();
    })
    .catch(function (err) {
      req.flash('errors', 'Failed to create new ticket');
    })
});

module.exports = router;

const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse;

const config = require('../config');

router.post('/haha', twilio.webhook({ validate: false }), function (req, res, next) {
  const twiml = new VoiceResponse();
  const dial = twiml.dial('');
  const client = dial.client();
  client.identity('tinhpv');
  console.log('call.js - Line 8 - ', 'zooo hahahahahahahah', req);
  res.send(twiml.toString());
})

// POST /calls/connect
router.post('/connect', twilio.webhook({ validate: false }), function (req, res, next) {
  var phoneNumber = req.body.phoneNumber;
  var callerId = config.twilioPhoneNumber;
  var twiml = new VoiceResponse();

  console.log('call.js - Line 13 - ', req.body);
  console.log('call.js - Line 14 - ', callerId);
  var dial = twiml.dial({ callerId: callerId });
  if (phoneNumber) {
    dial.number({}, phoneNumber);
  } else {
    dial.client({}, "tinhpv");
  }

  res.send(twiml.toString());
});

module.exports = router;

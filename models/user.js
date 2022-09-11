var mongoose = require('mongoose');

var User = new mongoose.Schema({
  userName:String,
  phoneNumber: String,
  identity: String,
  appSid:String,
  apiKey: String,
  apiSecret: String,
  accountSid: String,
  twilioPhone: String,
  createdAt: Date
});

// Delete model definition in case it is already defined
delete mongoose.models.user;

var user = mongoose.model('user', User);
module.exports = user;

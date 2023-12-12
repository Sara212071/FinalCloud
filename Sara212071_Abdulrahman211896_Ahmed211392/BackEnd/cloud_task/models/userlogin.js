// models/User.js
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {

    type: 'String',
    required: true
},
banned: { type: Boolean, default: false },

  // Additional user properties can be added here
});

const UserModel = model('userlogin', UserSchema);

module.exports = UserModel;

// models/Admin.js
const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminModel = model('Admin', adminSchema);

module.exports = AdminModel;
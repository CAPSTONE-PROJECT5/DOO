const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ApprovalStatus schema
const approvalStatusSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true, unique: true }, // Changed field name to "name" for clarity
  description: { type: String, required: true }
});

// Define the ApprovalStatus model
const ApprovalStatus = mongoose.model('ApprovalStatus', approvalStatusSchema);

module.exports = ApprovalStatus;


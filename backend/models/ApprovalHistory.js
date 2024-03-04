const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ApprovalHistory schema
const approvalHistorySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  approverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now, required: true },
  previousStatus: { type: String }, // Added field for previous approval status
  comments: { type: String },
  decision: { type: String, required: true } // Changed field name to "decision" for clarity
});

// Define the ApprovalHistory model
const ApprovalHistory = mongoose.model('ApprovalHistory', approvalHistorySchema);

module.exports = ApprovalHistory;

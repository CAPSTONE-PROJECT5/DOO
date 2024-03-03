const mongoose = require('mongoose');

const approvalHistorySchema = new mongoose.Schema({
  _id: ObjectId,
  documentId: ObjectId,
  approverId: ObjectId,
  timestamp: Date,
  comments: String,
  decision: String,
  previousStatus: String, // Optional, to track previous approval status
  stageId: ObjectId, // Optional, to link to workflow stages
});

// Export the schema
module.exports = approvalHistorySchema;

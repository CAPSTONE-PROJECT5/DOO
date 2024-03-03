const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  description: String,
  stages: [
    {
      stageName: String,
      sequenceNumber: Number,
      // Additional fields as needed (e.g., responsibleRoles: [ObjectId])
    }
  ],
  decisionPoints: [
    {
      stageId: ObjectId,
      condition: String,
      nextStageIds: [ObjectId]
    }
  ],
  approvalCriteria: {
    roles: [String],
    userSelectionLogic: String // Optional, for dynamic user selection
  }
});

// Export the schema
module.exports = workflowSchema;

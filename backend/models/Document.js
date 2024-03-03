const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  _id: ObjectId,
  documentTypeId: ObjectId,
  title: String,
  filePath: String,
  creationDate: Date,
  workflowId: ObjectId,
  currentApproverId: ObjectId,
  approvalStatusId: ObjectId,
  repositoryId: ObjectId,
  versions: [Object],
  templateId: ObjectId
});

// Export the schema
module.exports = documentSchema;

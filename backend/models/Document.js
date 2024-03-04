const mongoose = require('mongoose');

// Document Schema
const documentSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    documentTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'DocumentType', required: true },
    title: { type: String, required: true },
    filePath: { type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    workflowId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workflow', required: true },
    currentApproverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the current approver
    approvalStatusId: { type: mongoose.Schema.Types.ObjectId, ref: 'ApprovalStatus', required: true },
    repositoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'DocumentRepository', required: true },
    versions: [{
      versionNumber: { type: Number, required: true },
      authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      changes: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }],
    templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'DocumentTemplate' },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Owner of the document
    acl: [{
      entity: { type: String, enum: ['user', 'role'], required: true },
      entityId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the user or role
      permissions: [{ type: String }] // Array of permissions granted to the user or role
    }]
  });
  

// Export the schema
module.exports = documentSchema;

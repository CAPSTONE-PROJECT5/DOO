const mongoose = require('mongoose');

const digitalSignatureSchema = new mongoose.Schema({
  _id: ObjectId,
  documentId: ObjectId,
  approverId: ObjectId,
  timestamp: Date,
  signatureData: { type: mongoose.Schema.Types.Buffer }, // Binary data for secure signature
  certificateId: ObjectId // Optional, to reference user signing certificates
});

// Export the schema
module.exports = digitalSignatureSchema;

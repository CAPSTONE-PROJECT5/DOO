const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the DigitalSignatures schema
const digitalSignatureSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  approverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now, required: true },
  signatureData: { type: Buffer, required: true }, // Changed field type to Buffer for secure storage
  certificateId: { type: mongoose.Schema.Types.ObjectId,required: true} // Optional, to reference user signing certificates
});

// Define the DigitalSignatures model
const DigitalSignatures = mongoose.model('DigitalSignatures', digitalSignatureSchema);

module.exports = DigitalSignatures;

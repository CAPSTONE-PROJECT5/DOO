const mongoose = require('mongoose');


// Audit Trail Schema
const auditTrailSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who performed the action
    documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true }, // Document affected by the action
    action: { type: String, required: true }, // Action performed (e.g., 'view', 'edit', 'delete')
    timestamp: { type: Date, default: Date.now },
    details: { type: String } // Additional details about the action
  });


const AuditTrail = mongoose.model('AuditTrail', auditTrailSchema);

module.exports = AuditTrail;
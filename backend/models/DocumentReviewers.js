const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the DocumentReviewer schema
const documentReviewerSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewDate: { type: Date, default: Date.now },
  comments: { type: String, default: '' },
  reviewRole: { type: String, enum: ['Primary Reviewer', 'Secondary Reviewer'] }, // Optional field for review roles
  reviewStatus: { type: String, enum: ['Pending Review', 'Review Completed'], default: 'Pending Review' } // Optional field for review status
});

// Define the DocumentReviewer model
const DocumentReviewer = mongoose.model('DocumentReviewer', documentReviewerSchema);

module.exports = DocumentReviewer;


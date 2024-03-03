const mongoose = require('mongoose');

const documentReviewerSchema = new mongoose.Schema({
  _id: ObjectId,
  documentId: { type: ObjectId, ref: 'Document' }, // Reference to the Document model
  userId: { type: ObjectId, ref: 'User' }, // Reference to the User model
  reviewDate: Date,
  comments: String,

  // Additional fields as needed (e.g., reviewRole, reviewStatus)
});

// Export the schema
module.exports = documentReviewerSchema;

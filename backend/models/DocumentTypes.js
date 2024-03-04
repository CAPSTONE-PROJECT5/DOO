const mongoose = require('mongoose');

// Define the schema for document types
const documentTypeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  // Additional fields as needed
});

// Create and export the DocumentType model
module.exports = mongoose.model('DocumentType', documentTypeSchema);

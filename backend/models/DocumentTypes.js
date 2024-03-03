const mongoose = require('mongoose');

const documentTypeSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String, // Optional, for a concise identifier
  description: String,

  // Additional fields as needed (e.g., permissions)
});

// Export the schema
module.exports = documentTypeSchema;

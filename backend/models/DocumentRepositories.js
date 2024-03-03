const mongoose = require('mongoose');

const documentRepositorySchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  description: String,
  location: String,

  // Additional fields as needed (e.g., accessControlList: [ObjectId])
});

// Export the schema
module.exports = documentRepositorySchema;

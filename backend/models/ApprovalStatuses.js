const mongoose = require('mongoose');

const approvalStatusSchema = new mongoose.Schema({
  _id: ObjectId,
  description: String
});

// Export the schema
module.exports = approvalStatusSchema;

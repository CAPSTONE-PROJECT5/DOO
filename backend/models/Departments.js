const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  description: String,
});

// Export the schema
module.exports = departmentSchema;

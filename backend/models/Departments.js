const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  parentDepartmentId: mongoose.Schema.Types.ObjectId, // Optional, for department hierarchy
  managerId: mongoose.Schema.Types.ObjectId // Optional, to reference department manager
});

// Create the model
const Department = mongoose.model('Department', departmentSchema);

// Export the model
module.exports = Department;

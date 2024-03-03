const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  _id: ObjectId,
  roleName: String,
  permissions: {
    create: Boolean,
    read: Boolean,
    update: Boolean,
    delete: Boolean,
    approve: Boolean,
    reject: Boolean,
    // Additional permission properties as needed (e.g., view all documents)
  },
  departmentId: ObjectId
});

// Export the schema
module.exports = roleSchema;

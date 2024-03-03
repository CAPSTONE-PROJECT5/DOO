const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  _id: ObjectId,
  roleId: ObjectId,
  userId: ObjectId
});

// Export the schema
module.exports = userRoleSchema;

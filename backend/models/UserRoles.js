const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Create an index to ensure uniqueness of roleId-userId pairs
userRoleSchema.index({ roleId: 1, userId: 1 }, { unique: true });

// Export the schema
module.exports = mongoose.model('UserRole', userRoleSchema);

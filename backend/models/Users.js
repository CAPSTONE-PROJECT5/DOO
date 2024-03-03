const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for password hashing

const userSchema = new mongoose.Schema({
  _id: ObjectId,
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: String,
  email: { type: String, unique: true, required: true },
  role: String,
  departmentId: ObjectId,
  isAdmin: Boolean,
  isActive: { type: Boolean, default: true }, // Optional, for user account status

  // Additional user information as needed
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  }
  next();
});

// Export the schema
module.exports = userSchema;

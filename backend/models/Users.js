const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  username: { type: String, required: true, unique: true, trim: true }, // Add trim option to remove whitespace
  password: { type: String, required: true, minlength: 6 }, // Minimum password length
  name: { type: String, required: true, trim: true }, // Add trim option to remove whitespace
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, // Add trim option to remove whitespace
    lowercase: true, // Convert email to lowercase
    validate: {
      validator: function(value) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format'
    }
  },
  role: { type: String, required: true, trim: true }, // Add trim option to remove whitespace
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  isAdmin: { type: Boolean, default: false },
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },
  isActive: { type: Boolean, default: true }
});

// Define the User model
const User = mongoose.model('User', userSchema);

module.exports = User;

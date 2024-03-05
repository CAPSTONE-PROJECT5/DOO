const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/Users');
const { sendVerificationEmail } = require('../utils/email'); // Import a function to send verification emails
const { generateVerificationToken } = require('../utils/token'); // Import a function to generate verification tokens


// Route to create a new user with email verification
router.post('/users', async (req, res) => {
    try {
      // Check if the username is already taken
      const existingUser = await User.findOne({ username: req.body.username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Generate a verification token
      const verificationToken = generateVerificationToken();
  
      // Create a new user object with verification token
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        departmentId: req.body.departmentId,
        isAdmin: req.body.isAdmin || false,
        verificationToken, // Add verification token to user
        isActive: false // Set isActive to false until user verifies email
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Send verification email
      await sendVerificationEmail(newUser.email, verificationToken);
  
      res.status(201).json({ message: 'User created successfully. Please verify your email.' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Route to verify user's email
  router.get('/verify-email/:token', async (req, res) => {
    try {
      // Find user by verification token
      const user = await User.findOne({ verificationToken: req.params.token });
      if (!user) {
        return res.status(404).json({ message: 'Invalid or expired verification token' });
      }
  
      // Mark user as verified and activate account
      user.isVerified = true;
      user.isActive = true;
      user.verificationToken = undefined; // Clear verification token
      await user.save();
  
      res.status(200).json({ message: 'Email verification successful. You can now log in.' });
    } catch (error) {
      console.error('Error verifying email:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get a user by ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to update a user by ID
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to delete a user by ID
router.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

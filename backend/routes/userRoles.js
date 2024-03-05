const express = require('express');
const router = express.Router();
const UserRole = require('../models/UserRole');

// Route to assign a role to a user
router.post('/user-roles', async (req, res) => {
  try {
    const userRole = new UserRole(req.body);
    await userRole.save();
    res.status(201).send(userRole);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all user roles
router.get('/user-roles', async (req, res) => {
  try {
    const userRoles = await UserRole.find();
    res.send(userRoles);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get user roles by user ID
router.get('/user-roles/:userId', async (req, res) => {
  try {
    const userRoles = await UserRole.find({ userId: req.params.userId });
    res.send(userRoles);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to remove a role from a user
router.delete('/user-roles/:roleId/:userId', async (req, res) => {
  try {
    await UserRole.findOneAndDelete({ roleId: req.params.roleId, userId: req.params.userId });
    res.send({ message: 'User role removed successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

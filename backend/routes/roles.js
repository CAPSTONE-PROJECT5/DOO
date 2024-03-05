const express = require('express');
const router = express.Router();
const Role = require('../models/Role');

// Route to create a new role
router.post('/roles', async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.status(201).send(role);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all roles
router.get('/roles', async (req, res) => {
  try {
    const roles = await Role.find();
    res.send(roles);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a role by ID
router.get('/roles/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).send({ message: 'Role not found' });
    }
    res.send(role);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a role by ID
router.patch('/roles/:id', async (req, res) => {
  // Similar to other route logic, implement as needed
});

// Route to delete a role by ID
router.delete('/roles/:id', async (req, res) => {
  // Similar to other route logic, implement as needed
});

module.exports = router;

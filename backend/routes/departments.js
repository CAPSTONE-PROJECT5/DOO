const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Route to create a new department
router.post('/departments', async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all departments
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.find();
    res.send(departments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a department by ID
router.get('/departments/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).send({ message: 'Department not found' });
    }
    res.send(department);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a department by ID
router.patch('/departments/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description', 'parentDepartmentId', 'managerId'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!department) {
      return res.status(404).send({ message: 'Department not found' });
    }
    res.send(department);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to delete a department by ID
router.delete('/departments/:id', async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) {
      return res.status(404).send({ message: 'Department not found' });
    }
    res.send(department);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

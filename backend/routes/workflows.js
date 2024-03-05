const express = require('express');
const router = express.Router();
const Workflow = require('../models/Workflow');

// Route to create a new workflow
router.post('/workflows', async (req, res) => {
  try {
    const workflow = new Workflow(req.body);
    await workflow.save();
    res.status(201).send(workflow);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all workflows
router.get('/workflows', async (req, res) => {
  try {
    const workflows = await Workflow.find();
    res.send(workflows);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a workflow by ID
router.get('/workflows/:id', async (req, res) => {
  try {
    const workflow = await Workflow.findById(req.params.id);
    if (!workflow) {
      return res.status(404).send({ message: 'Workflow not found' });
    }
    res.send(workflow);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a workflow by ID
router.put('/workflows/:id', async (req, res) => {
  try {
    const workflow = await Workflow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workflow) {
      return res.status(404).send({ message: 'Workflow not found' });
    }
    res.send(workflow);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to delete a workflow by ID
router.delete('/workflows/:id', async (req, res) => {
  try {
    const workflow = await Workflow.findByIdAndDelete(req.params.id);
    if (!workflow) {
      return res.status(404).send({ message: 'Workflow not found' });
    }
    res.send({ message: 'Workflow deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

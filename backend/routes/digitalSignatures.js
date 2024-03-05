const express = require('express');
const router = express.Router();
const DigitalSignatures = require('../models/DigitalSignatures');

// Route to create a new digital signature
router.post('/digital-signatures', async (req, res) => {
  try {
    const signature = new DigitalSignatures(req.body);
    await signature.save();
    res.status(201).send(signature);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all digital signatures
router.get('/digital-signatures', async (req, res) => {
  try {
    const signatures = await DigitalSignatures.find();
    res.send(signatures);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a digital signature by ID
router.get('/digital-signatures/:id', async (req, res) => {
  try {
    const signature = await DigitalSignatures.findById(req.params.id);
    if (!signature) {
      return res.status(404).send({ message: 'Digital signature not found' });
    }
    res.send(signature);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a digital signature by ID
router.patch('/digital-signatures/:id', async (req, res) => {
  // Similar to department route logic, implement as needed
});

// Route to delete a digital signature by ID
router.delete('/digital-signatures/:id', async (req, res) => {
  // Similar to department route logic, implement as needed
});

module.exports = router;

const express = require('express');
const router = express.Router();
const DocumentReviewer = require('../models/DocumentReviewer');

// Route to create a new document reviewer
router.post('/document-reviewers', async (req, res) => {
  try {
    const reviewer = new DocumentReviewer(req.body);
    await reviewer.save();
    res.status(201).send(reviewer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all document reviewers
router.get('/document-reviewers', async (req, res) => {
  try {
    const reviewers = await DocumentReviewer.find();
    res.send(reviewers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a document reviewer by ID
router.get('/document-reviewers/:id', async (req, res) => {
  try {
    const reviewer = await DocumentReviewer.findById(req.params.id);
    if (!reviewer) {
      return res.status(404).send({ message: 'Document reviewer not found' });
    }
    res.send(reviewer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a document reviewer by ID
router.patch('/document-reviewers/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

// Route to delete a document reviewer by ID
router.delete('/document-reviewers/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

module.exports = router;

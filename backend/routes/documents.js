// documents.js

const express = require('express');
const router = express.Router();

// Import Document model
const Document = require('../models/Document');

// @route   GET /api/documents
// @desc    Get all documents
// @access  Public
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/documents
// @desc    Create a new document
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newDocument = new Document(req.body);
    const savedDocument = await newDocument.save();
    res.json(savedDocument);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/documents/:id
// @desc    Delete a document
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Document deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

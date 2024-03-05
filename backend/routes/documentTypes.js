const express = require('express');
const router = express.Router();
const DocumentType = require('../models/DocumentType');

// Route to create a new document type
router.post('/document-types', async (req, res) => {
  try {
    const type = new DocumentType(req.body);
    await type.save();
    res.status(201).send(type);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all document types
router.get('/document-types', async (req, res) => {
  try {
    const types = await DocumentType.find();
    res.send(types);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a document type by ID
router.get('/document-types/:id', async (req, res) => {
  try {
    const type = await DocumentType.findById(req.params.id);
    if (!type) {
      return res.status(404).send({ message: 'Document type not found' });
    }
    res.send(type);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a document type by ID
router.patch('/document-types/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

// Route to delete a document type by ID
router.delete('/document-types/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

module.exports = router;

const express = require('express');
const router = express.Router();
const DocumentTemplate = require('../models/DocumentTemplates');

// Route to create a new document template
router.post('/document-templates', async (req, res) => {
  try {
    const template = new DocumentTemplate(req.body);
    await template.save();
    res.status(201).send(template);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all document templates
router.get('/document-templates', async (req, res) => {
  try {
    const templates = await DocumentTemplate.find();
    res.send(templates);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a document template by ID
router.get('/document-templates/:id', async (req, res) => {
  try {
    const template = await DocumentTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).send({ message: 'Document template not found' });
    }
    res.send(template);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a document template by ID
router.patch('/document-templates/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

// Route to delete a document template by ID
router.delete('/document-templates/:id', async (req, res) => {
  // Similar to document repository route logic, implement as needed
});

module.exports = router;

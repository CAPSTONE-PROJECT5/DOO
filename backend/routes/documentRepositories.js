const express = require('express');
const router = express.Router();
const DocumentRepository = require('../models/DocumentRepository');

// Route to create a new document repository
router.post('/document-repositories', async (req, res) => {
  try {
    const repository = new DocumentRepository(req.body);
    await repository.save();
    res.status(201).send(repository);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all document repositories
router.get('/document-repositories', async (req, res) => {
  try {
    const repositories = await DocumentRepository.find();
    res.send(repositories);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get a document repository by ID
router.get('/document-repositories/:id', async (req, res) => {
  try {
    const repository = await DocumentRepository.findById(req.params.id);
    if (!repository) {
      return res.status(404).send({ message: 'Document repository not found' });
    }
    res.send(repository);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to update a document repository by ID
router.patch('/document-repositories/:id', async (req, res) => {
  // Similar to department route logic, implement as needed
});

// Route to delete a document repository by ID
router.delete('/document-repositories/:id', async (req, res) => {
  // Similar to department route logic, implement as needed
});

module.exports = router;

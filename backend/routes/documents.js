const express = require('express');
const router = express.Router();
const Document = require('../models/documentModel');

// CREATE: Add a new document
router.post('/documents', async (req, res) => {
    try {
        const document = await Document.create(req.body);
        res.status(201).json(document);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all documents
router.get('/documents', async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get a specific document by ID
router.get('/documents/:id', getDocument, (req, res) => {
    res.json(res.document);
});

// UPDATE: Update a specific document by ID
router.patch('/documents/:id', getDocument, async (req, res) => {
    if (req.body.documentTypeId != null) {
        res.document.documentTypeId = req.body.documentTypeId;
    }
    if (req.body.title != null) {
        res.document.title = req.body.title;
    }
    // Update other fields similarly

    try {
        const updatedDocument = await res.document.save();
        res.json(updatedDocument);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a specific document by ID
router.delete('/documents/:id', getDocument, async (req, res) => {
    try {
        await res.document.remove();
        res.json({ message: 'Document deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get a document by ID
async function getDocument(req, res, next) {
    try {
        const document = await Document.findById(req.params.id);
        if (document == null) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.document = document;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;

const express = require('express');
const router = express.Router();
const AuditTrail = require('../models/auditTrailModel');

// CREATE: Add a new audit trail entry
router.post('/audit-trail', async (req, res) => {
    try {
        const auditTrailEntry = await AuditTrail.create(req.body);
        res.status(201).json(auditTrailEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all audit trail entries
router.get('/audit-trail', async (req, res) => {
    try {
        const auditTrailEntries = await AuditTrail.find();
        res.json(auditTrailEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get audit trail entries for a specific document
router.get('/audit-trail/document/:documentId', async (req, res) => {
    try {
        const auditTrailEntries = await AuditTrail.find({ documentId: req.params.documentId });
        res.json(auditTrailEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE: Delete all audit trail entries for a specific document
router.delete('/audit-trail/document/:documentId', async (req, res) => {
    try {
        await AuditTrail.deleteMany({ documentId: req.params.documentId });
        res.json({ message: 'Audit trail entries deleted for the document' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to handle errors
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = router;

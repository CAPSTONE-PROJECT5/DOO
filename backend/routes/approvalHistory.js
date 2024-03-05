const express = require('express');
const router = express.Router();
const ApprovalHistory = require('../models/ApprovalHistory');

// CREATE: Add a new approval history entry
router.post('/approval-history', async (req, res) => {
    try {
        const approvalHistory = await ApprovalHistory.create(req.body);
        res.status(201).json(approvalHistory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all approval history entries
router.get('/approval-history', async (req, res) => {
    try {
        const approvalHistoryEntries = await ApprovalHistory.find();
        res.json(approvalHistoryEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get a specific approval history entry by ID
router.get('/approval-history/:id', getApprovalHistoryEntry, (req, res) => {
    res.json(res.approvalHistoryEntry);
});

// UPDATE: Update a specific approval history entry by ID
router.patch('/approval-history/:id', getApprovalHistoryEntry, async (req, res) => {
    if (req.body.comments != null) {
        res.approvalHistoryEntry.comments = req.body.comments;
    }
    // Update other fields similarly

    try {
        const updatedApprovalHistory = await res.approvalHistoryEntry.save();
        res.json(updatedApprovalHistory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a specific approval history entry by ID
router.delete('/approval-history/:id', getApprovalHistoryEntry, async (req, res) => {
    try {
        await res.approvalHistoryEntry.remove();
        res.json({ message: 'Approval history entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get an approval history entry by ID
async function getApprovalHistoryEntry(req, res, next) {
    try {
        const approvalHistoryEntry = await ApprovalHistory.findById(req.params.id);
        if (approvalHistoryEntry == null) {
            return res.status(404).json({ message: 'Approval history entry not found' });
        }
        res.approvalHistoryEntry = approvalHistoryEntry;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;

const express = require('express');
const router = express.Router();
const ApprovalStatus = require('../models/ApprovalStatus');

// CREATE: Add a new approval status entry
router.post('/approval-status', async (req, res) => {
    try {
        const approvalStatus = await ApprovalStatus.create(req.body);
        res.status(201).json(approvalStatus);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all approval status entries
router.get('/approval-status', async (req, res) => {
    try {
        const approvalStatusEntries = await ApprovalStatus.find();
        res.json(approvalStatusEntries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get a specific approval status entry by ID
router.get('/approval-status/:id', getApprovalStatusEntry, (req, res) => {
    res.json(res.approvalStatusEntry);
});

// UPDATE: Update a specific approval status entry by ID
router.patch('/approval-status/:id', getApprovalStatusEntry, async (req, res) => {
    try {
        const updatedApprovalStatus = await res.approvalStatusEntry.set(req.body).save();
        res.json(updatedApprovalStatus);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a specific approval status entry by ID
router.delete('/approval-status/:id', getApprovalStatusEntry, async (req, res) => {
    try {
        await res.approvalStatusEntry.remove();
        res.json({ message: 'Approval status entry deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get an approval status entry by ID
async function getApprovalStatusEntry(req, res, next) {
    try {
        const approvalStatusEntry = await ApprovalStatus.findById(req.params.id);
        if (approvalStatusEntry == null) {
            return res.status(404).json({ message: 'Approval status entry not found' });
        }
        res.approvalStatusEntry = approvalStatusEntry;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  createHealthPlan,
  getHealthPlan,
  updateHealthPlan,
  deleteHealthPlan,
  addReminder,
  removeReminder
} = require('../controllers/healthPlanController');

// POST /api/health-plan
// Create a new health plan
router.post('/', auth, createHealthPlan);

// GET /api/health-plan
// Get user's health plan
router.get('/', auth, getHealthPlan);

// PUT /api/health-plan
// Update health plan
router.put('/', auth, updateHealthPlan);

// DELETE /api/health-plan
// Delete health plan
router.delete('/', auth, deleteHealthPlan);

// POST /api/health-plan/reminder
// Add a reminder to health plan
router.post('/reminder', auth, addReminder);

// DELETE /api/health-plan/reminder/:reminder_id
// Remove a reminder from health plan
router.delete('/reminder/:reminder_id', auth, removeReminder);

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  updateMedicalHistory,
  updateLifestyle,
  updateWearableIntegration,
  updatePrivacySettings
} = require('../controllers/userController');

// POST /api/users/register
// Register a new user
router.post('/register', registerUser);

// POST /api/users/login
// Login user
router.post('/login', loginUser);

// GET /api/users/profile
// Get user profile
router.get('/profile', auth, getProfile);

// PUT /api/users/profile
// Update user profile
router.put('/profile', auth, updateProfile);

// PUT /api/users/medical-history
// Update medical history
router.put('/medical-history', auth, updateMedicalHistory);

// PUT /api/users/lifestyle
// Update lifestyle information
router.put('/lifestyle', auth, updateLifestyle);

// PUT /api/users/wearable
// Update wearable integration
router.put('/wearable', auth, updateWearableIntegration);

// PUT /api/users/privacy
// Update privacy settings
router.put('/privacy', auth, updatePrivacySettings);

module.exports = router;
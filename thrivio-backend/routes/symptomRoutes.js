const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');
const auth = require('../middleware/auth');
const { createSymptom, getSymptoms, updateSymptom, deleteSymptom } = require('../controllers/symptomController');

router.post('/', auth, createSymptom);

router.get('/', auth, getSymptoms);

router.put('/', auth, updateSymptom);

router.delete('/', auth, deleteSymptom);

module.exports = router;
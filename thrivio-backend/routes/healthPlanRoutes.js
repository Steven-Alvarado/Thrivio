const express = require('express');
const router = express.Router();
const HealthPlan = require('../models/HealthPlan');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const newHealthPlan = new HealthPlan({
      user: req.user.id,
      ...req.body
    });
    const healthPlan = await newHealthPlan.save();
    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const healthPlan = await HealthPlan.findOne({ user: req.user.id });
    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
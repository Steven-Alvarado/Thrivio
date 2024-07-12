const HealthPlan = require('../models/HealthPlan');

// Create a new health plan
exports.createHealthPlan = async (req, res) => {
  try {
    const { dietRecommendations, supplements, exercises, lifestyleChanges, reminders } = req.body;

    const newHealthPlan = new HealthPlan({
      user: req.user.id,
      dietRecommendations,
      supplements,
      exercises,
      lifestyleChanges,
      reminders
    });

    const healthPlan = await newHealthPlan.save();
    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user's health plan
exports.getHealthPlan = async (req, res) => {
  try {
    const healthPlan = await HealthPlan.findOne({ user: req.user.id });
    if (!healthPlan) {
      return res.status(404).json({ msg: 'Health plan not found' });
    }
    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update health plan
exports.updateHealthPlan = async (req, res) => {
  try {
    const { dietRecommendations, supplements, exercises, lifestyleChanges, reminders } = req.body;

    const healthPlanFields = {};
    if (dietRecommendations) healthPlanFields.dietRecommendations = dietRecommendations;
    if (supplements) healthPlanFields.supplements = supplements;
    if (exercises) healthPlanFields.exercises = exercises;
    if (lifestyleChanges) healthPlanFields.lifestyleChanges = lifestyleChanges;
    if (reminders) healthPlanFields.reminders = reminders;

    let healthPlan = await HealthPlan.findOne({ user: req.user.id });

    if (!healthPlan) {
      return res.status(404).json({ msg: 'Health plan not found' });
    }

    healthPlan = await HealthPlan.findOneAndUpdate(
      { user: req.user.id },
      { $set: healthPlanFields },
      { new: true }
    );

    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete health plan
exports.deleteHealthPlan = async (req, res) => {
  try {
    const healthPlan = await HealthPlan.findOne({ user: req.user.id });

    if (!healthPlan) {
      return res.status(404).json({ msg: 'Health plan not found' });
    }

    await HealthPlan.findOneAndRemove({ user: req.user.id });

    res.json({ msg: 'Health plan removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a reminder to health plan
exports.addReminder = async (req, res) => {
  try {
    const { type, time } = req.body;

    const healthPlan = await HealthPlan.findOne({ user: req.user.id });

    if (!healthPlan) {
      return res.status(404).json({ msg: 'Health plan not found' });
    }

    healthPlan.reminders.push({ type, time });
    await healthPlan.save();

    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Remove a reminder from health plan
exports.removeReminder = async (req, res) => {
  try {
    const healthPlan = await HealthPlan.findOne({ user: req.user.id });

    if (!healthPlan) {
      return res.status(404).json({ msg: 'Health plan not found' });
    }

    // Get remove index
    const removeIndex = healthPlan.reminders
      .map(item => item.id)
      .indexOf(req.params.reminder_id);

    healthPlan.reminders.splice(removeIndex, 1);

    await healthPlan.save();

    res.json(healthPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
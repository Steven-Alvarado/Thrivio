const mongoose = require('mongoose');

// Schema for Health plans
const HealthPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dietRecommendations: [String],
  supplements: [String],
  exercises: [String],
  lifestyleChanges: [String],
  reminders: [{
    type: String,
    time: Date
  }]
});

module.exports = mongoose.model('HealthPlan', HealthPlanSchema);
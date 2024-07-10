const mongoose = require('mongoose');

// Schema for symptoms

const SymptomSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  symptom: String,
  severity: Number,
  frequency: String,
  notes: String
});

module.exports = mongoose.model('Symptom', SymptomSchema);
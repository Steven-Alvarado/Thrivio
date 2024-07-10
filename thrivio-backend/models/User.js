const mongoose = require('mongoose');


// Schema for user information
// TODO Ensure compliancy HIPPA, Regulations, etc.

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  gender: String,
  contactInfo: String,
  medicalHistory: {
    conditions: [String],
    surgeries: [String],
    medications: [String],
    allergies: [String]
  },
  lifestyle: {
    diet: String,
    exercise: String,
    sleepPattern: String,
    stressLevel: String
  },
  wearableIntegration: {
    deviceType: String,
    lastSync: Date
  },
  privacySettings: {
    dataSharing: Boolean
  }
});

module.exports = mongoose.model('User', UserSchema);
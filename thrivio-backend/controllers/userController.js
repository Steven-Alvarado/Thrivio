const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    let { name, email, password, age, gender, contactInfo } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      email,
      password,
      age,
      gender,
      contactInfo
    });

    await user.save();

    // Create and return JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create and return JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update medical history
exports.updateMedicalHistory = async (req, res) => {
  try {
    const { conditions, surgeries, medications, allergies } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { 
        $set: { 
          'medicalHistory.conditions': conditions,
          'medicalHistory.surgeries': surgeries,
          'medicalHistory.medications': medications,
          'medicalHistory.allergies': allergies
        } 
      },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update lifestyle information
exports.updateLifestyle = async (req, res) => {
  try {
    const { diet, exercise, sleepPattern, stressLevel } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { 
        $set: { 
          'lifestyle.diet': diet,
          'lifestyle.exercise': exercise,
          'lifestyle.sleepPattern': sleepPattern,
          'lifestyle.stressLevel': stressLevel
        } 
      },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update wearable integration
exports.updateWearableIntegration = async (req, res) => {
  try {
    const { deviceType, lastSync } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { 
        $set: { 
          'wearableIntegration.deviceType': deviceType,
          'wearableIntegration.lastSync': lastSync
        } 
      },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update privacy settings
exports.updatePrivacySettings = async (req, res) => {
  try {
    const { dataSharing } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { 'privacySettings.dataSharing': dataSharing } },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
const Symptom = require('../models/Symptom');

// Create a new symptom log
exports.createSymptom = async (req, res) => {
  try {
    const newSymptom = new Symptom({
      user: req.user.id,
      symptom: req.body.symptom,
      severity: req.body.severity,
      frequency: req.body.frequency,
      notes: req.body.notes
    });

    const symptom = await newSymptom.save();
    res.json(symptom);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all symptoms for a user
exports.getSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find({ user: req.user.id }).sort({ date: -1 });
    res.json(symptoms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a symptom log
exports.updateSymptom = async (req, res) => {
  try {
    let symptom = await Symptom.findById(req.params.id);

    if (!symptom) return res.status(404).json({ msg: 'Symptom not found' });

    // Make sure user owns symptom
    if (symptom.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    symptom = await Symptom.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(symptom);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a symptom log
exports.deleteSymptom = async (req, res) => {
  try {
    const symptom = await Symptom.findById(req.params.id);

    if (!symptom) return res.status(404).json({ msg: 'Symptom not found' });

    // Make sure user owns symptom
    if (symptom.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await symptom.remove();
    res.json({ msg: 'Symptom removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
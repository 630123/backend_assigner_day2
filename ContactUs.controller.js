const Contact = require('../models/ContactUs.model');

// Save contact details
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message, address, subject } = req.body;

    // Validation
    if (!name || !email || !phone || !message || !address || !subject) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, phone, message, address, subject });
    await newContact.save();

    res.status(201).json({ message: 'Contact information saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true },
    admissionDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

module.exports = mongoose.model('Admission', admissionSchema);

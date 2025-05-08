const express = require('express');
const router = express.Router();
const Admission = require('../models/admission');


router.post('/signup', async (req, res) => {
    try {
        const { studentName, email, course, status } = req.body;
        const newAdmission = new Admission({
            studentName,
            email,
            course,
            status
        });
        const savedAdmission = await newAdmission.save();
        res.status(201).json(savedAdmission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.status(200).json(admissions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const admission = await Admission.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.json(admission);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const admission = await Admission.findByIdAndDelete(req.params.id);
        if (!admission) {
            return res.status(404).json({ message: 'Admission not found' });
        }
        res.json({ message: 'Admission deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

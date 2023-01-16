const express = require('express');
const feedbackForms = require('../model/feedbackForm');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/post", async (req, res) => {
    const newFeedbackForms = new feedbackForms({
        _id: new mongoose.Types.ObjectId(),
        type: req.body.type,
        topic: req.body.topic,
        detail: req.body.detail,
        userEmail: req.body.userEmail
    })
    try {
        const formToSave = await newFeedbackForms.save();
        res.status(200).json(formToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
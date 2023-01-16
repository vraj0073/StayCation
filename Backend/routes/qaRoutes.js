const express = require('express');
const qas = require('../model/qa');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/post", async (req, res) => {
    const newQAs = new qas({
        _id: new mongoose.Types.ObjectId(),
        question: req.body.question,
        answer: req.body.answer,
        type: req.body.type
    })
    try {
        const qasToSave = await newQAs.save();
        res.status(200).json(qasToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allQAs = await qas.find();
        res.json(allQAs);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
const express = require('express');
const reviews = require('../model/review');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/post', async (req, res) => {
    const newReview = new reviews({
        _id: new mongoose.Types.ObjectId(),
        userEmail: req.body.userEmail,
        roomId: req.body.roomId,
        roomName: req.body.roomName,
        content: req.body.content,
        rating: req.body.rating,
        date: new Date(req.body.date)
    })
    try {
        const reviewToSave = await newReview.save();
        res.status(200).json(reviewToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allReviews = await reviews.find();
        res.json(allReviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/:userEmail', async (req, res) => {
    try {
        const userReviews = await reviews.find({ userEmail: req.params.userEmail });
        res.json(userReviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/get/roomId/:roomId', async (req, res) => {
    try {
        const roomReviews = await reviews.find({ roomId: req.params.roomId });
        res.json(roomReviews);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const ObjectId = mongoose.Types.ObjectId;
router.patch('/update/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const updatedReview = req.body;
        const options = { new: true };
        const result = await reviews.findOneAndUpdate({ _id: id }, updatedReview, options);
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const deletedReview = await reviews.findOneAndDelete({ _id: id })
        res.send(`Document with ${deletedReview.roomName} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
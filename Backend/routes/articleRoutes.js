const express = require('express');
const articles = require('../model/article');
const router = express.Router();
const mongoose = require('mongoose');

router.post("/post", async (req, res) => {
    const newArticles = new articles({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        type: req.body.type
    })
    try {
        const articlesToSave = await newArticles.save();
        res.status(200).json(articlesToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allArticles = await articles.find();
        res.json(allArticles);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
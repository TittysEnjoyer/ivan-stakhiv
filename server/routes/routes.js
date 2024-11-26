const express = require('express');
const Model = require('../models/model');

const router = express.Router();

router.post('/create-post', async (req, res) => {
    const data = new Model({
        nickname: req.body.nickname,
        post: req.body.post,
        tag: req.body.tag
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/all-post', async (req, res) => {
    try {
        const posts = await Model.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
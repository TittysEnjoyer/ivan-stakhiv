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

router.delete('/delete-post/:nickname', async (req, res) => {
    const { nickname } = req.params;

    try {
        const deletedPost = await Model.findOneAndDelete({ nickname });

        if (!deletedPost) {
            return res.status(404).json({ message: 'Пост із вказаним nickname не знайдено' });
        }

        res.status(200).json({ message: 'Пост успішно видалено', deletedPost });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/update-post/:nickname', async (req, res) => {
    const { nickname } = req.params;
    const { post, tag } = req.body;

    try {
        const updatedPost = await Model.findOneAndUpdate(
            { nickname },
            { post, tag },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: 'Пост із вказаним nickname не знайдено' });
        }

        res.status(200).json({ message: 'Пост успішно оновлено', updatedPost });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
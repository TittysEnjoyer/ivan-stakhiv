const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nickname: {
        required: true,
        type: String
    },
    post: {
        required: true,
        type: String
    },
    tag: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', dataSchema, 'POSTS');
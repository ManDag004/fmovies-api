const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true, 
        default: 0
    },
    status: {
        type: String,
        required: true,
        default: 'pause'
    }
});

module.exports = mongoose.model('VideoModel', videoSchema);
const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    owner: {
        type: String, 
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    review: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
})

module.exports = reviewSchema
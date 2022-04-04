const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
    }, 
}, {
    timestamps: true
})

module.exports = favoriteSchema
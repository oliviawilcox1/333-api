const mongoose = require('mongoose')
const reviewSchema = require('./review')

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		}, 
		available: {
			type: Boolean,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		reviews: {
			type: [reviewSchema]
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Product', productSchema)

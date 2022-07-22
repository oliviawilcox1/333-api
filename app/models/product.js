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
		brand: {
			type: String
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
		}, 
		available: {
			type: Boolean,
		},
		category: {
			type: String,
			required: true,
		},
		wheretobuy: {
			type: String,
		},
		ingredienthighlights: {
			type: String,
		},
		ingredients: {
			type: String, 
		},
		target: {
			type: String,
		},
		reviews: {
			type: [reviewSchema]
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Product', productSchema)

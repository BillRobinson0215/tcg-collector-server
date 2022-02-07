const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
  format: {
    type: String,
    required: true 
  },
	cards: [
		{
			name: {
				type: String,
				required: true,
			},

			manaCost: {
				type: String,
			},

			cmc: {
				type: Number,
				required: true,
			},

			colors: [
				{
					type: String,
				},
			],

			colorIdentity: [
				{
					type: String,
				},
			],

			type: {
				type: String,
				required: true,
			},

			types: [
				{
					type: String,
					required: true,
				},
			],

			rarity: {
				type: String,
			},

			set: {
				type: String,
			},

			setName: {
				type: String,
				required: true,
			},

			text: {
				type: String,
			},

			imageUrl: {
				type: String,
			},

			originalText: {
				type: String,
			},

			originalType: {
				type: String,
			},

			id: {
				type: String,
				required: true,
				unique: true,
			},

			power: {
				type: String,
			},

			toughness: {
				type: String,
			},

			loyalty: {
				type: String,
			},

			quantity: {
				type: Number,
				default: 1,
			},
		},
	],
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

module.exports = mongoose.model('Deck', deckSchema)

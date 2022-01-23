const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  manaCost: {
    type: String,
    require: true
  },

  convertedManaCost: {
    type: String,
    required: true
  },

  colorIdentity: {
    type: String,
    required: true
  },

  type: [
    {
      type: String,
      required: true
    }
  ],

  subtypes: [
    {
      type: String
    }
  ],

  keywords: [
    {
      type: String
    }
  ],

  text: {
    type: String
  },

  power: {
    type: String
  },

  toughness: {
    type: String
  },

  loyalty: {
    type: String
  },
  rarity: String
})

module.exports = mongoose.model('Card', cardSchema)

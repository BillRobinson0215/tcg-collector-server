const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Collection', collectionSchema)

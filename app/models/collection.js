const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
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

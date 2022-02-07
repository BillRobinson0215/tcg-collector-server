  const mongoose = require('mongoose')

    const collectionSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
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

          artist: {
            type: String,
          },

          number: {
            type: String,
          },

          layout: {
            type: String,
          },

          multiverseid: {
            type: String,
          },

          imageUrl: {
            type: String,
          },

          variations: [
            {
              type: String,
            },
          ],

          printings: [
            {
              type: String,
            },
          ],

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

          foil: {
            type: Boolean,
            default: false
          },

          quantity: {
            type: Number,
            default: 1
          }
        },
      ],
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    })

module.exports = mongoose.model('Collection', collectionSchema)

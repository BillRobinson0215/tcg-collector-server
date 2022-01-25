const express = require('express')
const passport = require('passport')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const router = express.Router()
const requireOwnership = customErrors.requireOwnership

const Collection = require('../models/collection.js')
const Card = require('../models/card.js')
const User = require('../models/user.js')
// const User = require('../models/card.js')

const requiresToken = passport.authenticate('bearer', { session: false })

router.post('/collection/new', (req, res, next) => {
	const collection = req.body

  User.findById(collection.owner)
  .then((user) => {
    console.log(user)
    Collection.create(collection)
			.then((collection) => {
      user.collections.push(collection)
      user.save()
      return collection
      })
			.then((collection) => {
				res.status(201).json({ collection })
			})
  })
		// .then((user.collection = collection._id))
		.catch(next)
})

router.get('/collection/show', requiresToken, (req, res, next) => {
  Collection.find()
    .then((collections) => {
      // `examples` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return collections.map((collections) => collections.toObject())
    })
  // respond with status 200 and JSON of the examples
    .then((collection) => res.status(200).json({ collection }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

router.get('/collection/:id', requiresToken, (req, res, next) => {
  Collection.findById(req.params.id)
    .populate('cards')
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "example" JSON
    .then(collection => res.status(200).json({ cards: collection }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

router.get('/collection/:user', requiresToken, (req, res, next) => {
	User.findById(req.user)
		.then((user) => {
			// `examples` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return user.collections.map((user) => user.toObject())
		})
		// respond with status 200 and JSON of the examples
		.then((user) => res.status(200).json({ user }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

router.delete('/collection/delete/:id', requiresToken, (req, res, next) => {
  Collection.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((counter) => res.json())
    .catch((err) => next(err))
})

router.patch('/collection/:id/:cardId', async (req, res, next) => {
		const card = await Card.findById(req.params.cardId)
		console.log(card._id)
		console.log(req.params.id)
		Collection.findById(req.params.id)
			.populate('cards')
			.then((collection) => {
				collection.cards.push(card)
				collection.save().then((collection) => {
					res.status(204).json(collection)
				})
			})
			// if an error occurs, pass it to the handler
			.catch(next)
	}
)

module.exports = router

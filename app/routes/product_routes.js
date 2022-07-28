// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examplesƒ
const Product = require('../models/product')
const Favorite = require('../models/favorite')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// *******************************************
//  Index Route

router.get('/products', (req, res, next) => {
	Product.find()
		.then((products) => {
			// `products` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return products.map((product) => product.toObject())
		})
		// respond with status 200 and JSON of the examples
		.then((products) => res.status(200).json({ products: products }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// *******************************************
//  Kbeauty Route


router.get('/products/kbeauty', (req, res, next) => {
	Product.find({kbeauty: true})
		.then((kbeauty) => {
			return kbeauty.map((kbeauty) => kbeauty.toObject())
		})
		.then((kbeauty) => res.status(200).json({ kbeauty: kbeauty }))
		.catch(next)
})

// *******************************************
// Skincare Route

router.get('/products/skincare', (req, res, next) => {
	Product.find({category: "Skincare"})
		.then((skincare) => {
			return skincare.map((skincare) => skincare.toObject())
		})
		.then((skincare) => res.status(200).json({ skincare: skincare }))
		.catch(next)
})

// *******************************************
//  Haircare Route

router.get('/products/haircare', (req, res, next) => {
	Product.find({category: "Haircare"})
		.then((haircare) => {
			return haircare.map((haircare) => haircare.toObject())
		})
		.then((haircare) => res.status(200).json({ haircare: haircare }))
		.catch(next)
})

// *******************************************
//  Fragrance Route

router.get('/products/fragrance', (req, res, next) => {
	Product.find({category: "Fragrance"})
		.then((fragrance) => {
			return fragrance.map((fragrance) => fragrance.toObject())
		})
		.then((fragrance) => res.status(200).json({ fragrance: fragrance }))
		.catch(next)
})

// *******************************************
//  Bodycare Route

router.get('/products/bodycare', (req, res, next) => {
	Product.find({category: "Bodycare"})
		.then((bodycare) => {
			return bodycare.map((bodycare) => bodycare.toObject())
		})
		.then((bodycare) => res.status(200).json({ bodycare: bodycare }))
		.catch(next)
})

// *******************************************
//  Makeup Route

router.get('/products/makeup', (req, res, next) => {
	Product.find({category: "Makeup"})
		.then((makeup) => {
			return makeup.map((makeup) => makeup.toObject())
		})
		.then((makeup) => res.status(200).json({ makeup: makeup }))
		.catch(next)
})


router.get('/products/price', (req, res, next) => {
	Product.find({price: {$lt: 20}})
		.then((price) => {
			return price.map((price) => price.toObject())
		})
		.then((price) => res.status(200).json({ price: price }))
		.catch(next)
})




// *******************************************
//  Show Route

router.get('/products/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Product.findById(req.params.id)
		.populate('owner')
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "example" JSON
		.then((product) => res.status(200).json({ product: product.toObject() }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// *******************************************
//  POST/CREATE Route

router.post('/products', requireToken, (req, res, next) => {
	// set owner of new product to be current user
	req.body.product.owner = req.user.id

	Product.create(req.body.product)
		// respond to succesful `create` with status 201 and JSON of new "product"
		.then((product) => {
			res.status(201).json({ product: product.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})

// *******************************************
//  Update/Patch Route ex: products/5a7db6c74d55bc51bdf39793

router.patch('/products/:id', requireToken, removeBlanks, (req, res, next) => {
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.product.owner

	Product.findById(req.params.id)
		.then(handle404)
		.then((product) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, product)
			// pass the result of Mongoose's `.update` to the next `.then`
			return product.updateOne(req.body.product)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// *******************************************
// Destry/DELETE Route ex) products/5a7db6c74d55bc51bdf39793

router.delete('/products/:id', requireToken, (req, res, next) => {
	Product.findById(req.params.id)
		.then(handle404)
		.then((product) => {
			// throw an error if current user doesn't own `product`
			requireOwnership(req, product)
			// delete the product ONLY IF the above didn't throw
			product.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// *******************************************
//  Favorites Routes
// *******************************************


router.get('/favorites', (req, res, next) => {
	Favorite.find({})
		.populate('product')
		.populate('owner')
		.then((favorites) => {
			return favorites.map((favorite) => favorite.toObject())
		})
		.then((favorites) => res.status(200).json({ favorites: favorites }))
		.catch(next)
})

router.post('/favorites', requireToken, (req, res, next) => {
	// set owner of new favorite to be current user
	req.body.favorite.owner = req.user.id
	Favorite.create(req.body.favorite)
		// respond to succesful `create` with status 201 and JSON of new "favorite"
		.then((favorite) => {
			res.status(201).json({ favorite: favorite.toObject() })
		})
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})


router.delete('/favorites/:id', requireToken, (req, res, next) => {
	Favorite.findById(req.params.id)
		.then(handle404)
		.then((favorite) => {
			// throw an error if current user doesn't own `favorites`
			requireOwnership(req, favorite)
			// delete the favorites ONLY IF the above didn't throw
			favorite.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})



module.exports = router

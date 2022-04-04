// import our dependencies, middleware and models

const express = require('express')
const passport = require('passport')
const Product = require('../models/product')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const requireToken = passport.authenticate('bearer', {session: false})
const removeBlanks = require('../../lib/remove_blank_fields')
const router = express.Router()

// ROUTES GO HERE 

// POST create a toy
// POST /toys/<pet_id> 
router.post('/reviews/:productId', removeBlanks, (req,res,next) => {
    // get our toy from req.body 
    const review = req.body.review
    // get our petId from req.params.id
    const productId = req.params.productId
    // find the pet 
    Product.findById(productId)
    // handle what happens if no pets found
        .then(handle404)
        // push the toy to the toys array
        .then(product => {
            console.log('this is the product', product)
            console.log('this is the review', review)
            product.reviews.push(review)

            // save the pet
            return product.save()
        })
        // then we send the pet as json
        /then(product => res.status(201).json({ product: product}))
        // catch errors and send to the handler 
        .catch(next)

})

// PATCH to update a toy
// PATCH /toys/<pet_id>/<toy_id>




// UPDATE
// PATCH /toys/<pet_id>/<toy_id>
router.patch('/reviews/:productId/:reviewId', requireToken, removeBlanks, (req, res, next) => {
    const reviewId = req.params.reviewId
    const productId = req.params.productId

    Product.findById(productId)
        .then(handle404)
        .then(product => {
            const theReview = product.reviews.id(reviewId)
            console.log('this is the original toy', theReview)
            requireOwnership(req, product)

            theReview.set(req.body.review)

            return product.save()
        })
        // .then(data => {
        //     const { theToy, pet } = data
        //     // console.log('this is data in update', data)
        //     console.log('this is the toy in req.body', req.body.toy)
        //     console.log('type from req.body', typeof req.body.toy.isSqueaky)
        //     console.log('theToy', theToy)
        //     console.log('pet', pet)
        //     theToy.name = req.body.toy.name
        //     theToy.description = req.body.toy.description
        //     if (req.body.toy.isSqueaky) {
        //         theToy.isSqueaky = true
        //     } else {
        //         theToy.isSqueaky = false
        //     }
        //     theToy.condition = req.body.toy.condition
            
        //     // theToy.set({ toy: req.body.toy })
        //     console.log('theToy after updating', theToy)
// THIS SYNTAX ERROR ON TOY shouldnt be in an object
        //     return pet.save()
        // })
        .then(() => res.sendStatus(204))
        .catch(next)


})


// DELETE a toy
// DELETE /toys/<pet_id>/<toy_id>
router.delete('/reviews/:productId/:reviewId', requireToken, (req,res,next)=> {
    const reviewId = req.params.reviewId
    const productId = req.params.productId

    Product.findById(productId)
    // if pet not found throw 404
        .then(handle404)
        .then(product => {
            const theReview = product.reviews.id(reviewId)
            // requrie that the deleter is the owner of the pet
            requireOwnership(req,product)
            // call remove on the toy we got on the line above 
            theReview.remove()
            // return the saved pet
            return product.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router
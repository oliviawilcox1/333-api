// import our dependencies, middleware and models

const express = require('express');
const passport = require('passport');
const Product = require('../models/product');
const customErrors = require('../../lib/custom_errors');
const handle404 = customErrors.handle404;
const requireOwnership = customErrors.requireOwnership;
const requireToken = passport.authenticate('bearer', { session: false });
const removeBlanks = require('../../lib/remove_blank_fields');
const router = express.Router();

// ROUTES GO HERE

// POST create a review
router.post('/reviews/:productId', removeBlanks, (req, res, next) => {
  // get our review from req.body
  const review = req.body.review;
  // get our productId from req.params.id
  const productId = req.params.productId;
  // find the product
  Product.findById(productId)
    // handle what happens if no products found
    .then(handle404)
    // push the review to the reviews array
    .then((product) => {
      console.log('this is the product', product);
      console.log('this is the review', review);
      product.reviews.push(review);

      // save the product
      return product.save();
    })
    // then we send the product as json
    .then((product) => res.status(201).json({ product: product }))
    // catch errors and send to the handler
    .catch(next);
});

// PATCH to update a review

// UPDATE
router.patch(
  '/reviews/:productId/:reviewId',
  requireToken,
  removeBlanks,
  (req, res, next) => {
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;

    Product.findById(productId)
      .then(handle404)
      .then((product) => {
        const theReview = product.reviews.id(reviewId);
        console.log('this is the original review', theReview);
        requireOwnership(req, product);

        theReview.set(req.body.review);

        return product.save();
      })
      .then(() => res.sendStatus(204))
      .catch(next);
  }
);

// DELETE a review
router.delete(
  '/reviews/:productId/:reviewId',
  requireToken,
  (req, res, next) => {
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;


    Product.findById(productId)
      // if product not found throw 404
      .then(handle404)
      .then((product) => {
        const theReview = product.reviews.id(reviewId);
        // requrie that the deleter is the owner of the product
        // requireOwnership(req,product)
        // call remove on the review we got on the line above
        theReview.remove();
        // return the saved product
        return product.save();
      })
      .then(() => res.sendStatus(204))
      .catch(next);
  }
);

module.exports = router;

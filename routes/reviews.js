const express = require("express");

const Campground = require("../models/campground");
const Review = require("../models/review");
const catchAsync = require("../utils/catchAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");

const router = express.Router({ mergeParams: true });

const { createReview, deleteReview } = reviewController;

router.post("/", isLoggedIn, validateReview, catchAsync(createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(deleteReview)
);

module.exports = router;

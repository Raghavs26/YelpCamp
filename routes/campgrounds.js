const express = require("express");

const Campground = require("../models/campground");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const campgroundController = require("../controllers/campgrounds");

const router = express.Router();

const {
  index,
  renderNewForm,
  createCampground,
  showCampground,
  renderEditForm,
  updateCampground,
  deleteCampground,
} = campgroundController;

router
  .route("/")
  .get(catchAsync(index))
  .post(isLoggedIn, validateCampground, catchAsync(createCampground));

router.get("/new", isLoggedIn, renderNewForm);

router
  .route("/:id")
  .get(catchAsync(showCampground))
  .put(isLoggedIn, isAuthor, validateCampground, catchAsync(updateCampground))
  .delete(isLoggedIn, isAuthor, catchAsync(deleteCampground));

router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(renderEditForm));

module.exports = router;

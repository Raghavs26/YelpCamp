const express = require("express");
const passport = require("passport");

const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const userController = require("../controllers/users");

const router = express.Router();

const { renderRegister, register, renderLogin, login, logout } = userController;

router.route("/register").get(renderRegister).post(catchAsync(register));

router
  .route("/login")
  .get(renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    login
  );

router.get("/logout", logout);

module.exports = router;

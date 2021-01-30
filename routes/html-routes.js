// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
const router = require("express").Router();

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("landing");
});

router.get("/signup", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("landing2");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, (req, res) => {
  let dbFavoriteRecipes;
  let dbList;
  dbList = db.List.findAll({
    where: {
      username: req.user.email
    }
  })
    .then(
      (dbFavoriteRecipes = db.FavoriteRecipes.findAll({
        where: {
          username: req.user.email
        }
      }))
    )
    .then(
      res.render("index", {
        favoriteRecipes: dbFavoriteRecipes,
        lists: dbList
      })
    );
});

module.exports = router;

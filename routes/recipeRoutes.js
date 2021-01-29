const { Recipe } = require("../models");
const route = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("../controllers/food_controller");

route.get("/api/recipes", isAuthenticated, (req, res) => {
  Recipe.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

route.post("/api/recipes", isAuthenticated, (req, res) => {
  Recipe.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newRecipe => {
    res.json(newRecipe);
  });
});

module.exports = route;

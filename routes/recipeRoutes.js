const { Recipe } = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/api/recipes", isAuthenticated, (req, res) => {
  Recipe.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

router.post("/api/recipes", isAuthenticated, (req, res) => {
  Recipe.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newRecipe => {
    res.json(newRecipe);
  });
});

module.exports = router;

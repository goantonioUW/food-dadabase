const { List } = require("../models");
const route = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("../controllers/food_controller");

route.get("/api/list", isAuthenticated, (req, res) => {
  List.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

route.post("/api/list", isAuthenticated, (req, res) => {
  List.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newIngredient => {
    res.json(newIngredient);
  });
});

module.exports = route;

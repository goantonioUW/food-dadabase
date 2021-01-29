const { Search } = require("../models");
const route = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("../controllers/food_controller");

route.get("/api/search", isAuthenticated, (req, res) => {
  Search.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

route.post("/api/search", isAuthenticated, (req, res) => {
  Search.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newSearch => {
    res.json(newSearch);
  });
});

module.exports = route;

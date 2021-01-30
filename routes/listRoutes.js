const { List } = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
// Store List
router.get("/api/list", isAuthenticated, (req, res) => {
  List.findAll({
    where: {
      username: req.user.email
    }
  });
  return res;
});
// Add ingredient to list
router.post("/api/list", isAuthenticated, (req, res) => {
  List.create({
    name: req.body.name,
    username: req.user.email
  }).then(newIngredient => {
    res.json(newIngredient);
  });
});

module.exports = router;

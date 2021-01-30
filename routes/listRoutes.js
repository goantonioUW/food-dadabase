const { List } = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/api/list", isAuthenticated, (req, res) => {
  List.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

router.post("/api/list", isAuthenticated, (req, res) => {
  List.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newIngredient => {
    res.json(newIngredient);
  });
});

module.exports = router;

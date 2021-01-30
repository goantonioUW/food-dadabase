const { Search } = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/api/search", isAuthenticated, (req, res) => {
  Search.findAll({
    where: {
      UserId: req.user.id
    }
  });
  return res;
});

router.post("/api/search", isAuthenticated, (req, res) => {
  Search.create({
    name: req.body.name,
    UserId: req.user.id
  }).then(newSearch => {
    res.json(newSearch);
  });
});

module.exports = router;

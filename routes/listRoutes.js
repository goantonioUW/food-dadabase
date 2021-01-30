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

router.delete("/api/list/:id", isAuthenticated, (req, res) => {
  BookCategory.destroy({
    where: {
      id: req.params.id,
      username: req.user.email
    }
  }).then(result => {
    if (result) {
      return res.json({ success: true });
    }

    res.status(500).json({ success: false });
  });
});

module.exports = router;

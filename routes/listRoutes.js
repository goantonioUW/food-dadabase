const { List } = require("../models");
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Add ingredient to list
router.post("/api/list", isAuthenticated, (req, res) => {
  List.create({
    name: req.body.name,
    username: req.user.email
  }).then(newIngredient => {
    res.json(newIngredient);
  });
});
// Delete from List
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

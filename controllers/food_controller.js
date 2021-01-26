const express = require("express");

const router = express.Router();

const favorites = require("../models/favorites");

const list = require("../models/shopping-list");

//Main page view of recipes and dad jokes
router.get("/", (req, res) => {
  list.selectAll(data => {
    const foodObj = {
      burgers: data
    };
    res.render("index", foodObj);
    console.log("Table log:", foodObj);
  });
});

//View of all favorites list
router.post("/api/favorites", (req, res) => {
  favorites.insertOne(
    ["username", "recipeId", "recipeName"],
    [req.body.username, req.body.recipeId, req.body.recipeName],
    data => {
      res.json({ id: data.insertId });
    }
  );
});

//View of all shopping list
router.post("/api/list", (req, res) => {
  favorites.insertOne(
    ["username", "ingredient", "amount", "measurement"],
    [
      req.body.username,
      req.body.ingredient,
      req.body.amount,
      req.body.measurement
    ],
    data => {
      res.json({ id: data.insertId });
    }
  );
});

//
router.put("/api/list/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("Condition: ", condition);

  list.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    data => {
      if (data.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;

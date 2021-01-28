const app = require("express").Router();

const router = require("../models");

//Main page view of recipes and dad jokes
app.get("/", (req, res) => {
  router.selectAll(data => {
    const foodObj = {
      search: data
    };
    res.render("index", foodObj);
    console.log("Table log:", foodObj);
  });
});

//View of all favorites list
app.post("/api/favorites", (req, res) => {
  router.insertOne(
    ["username", "recipeId", "recipeName"],
    [req.body.username, req.body.recipeId, req.body.recipeName],
    data => {
      res.json({ id: data.insertId });
    }
  );
});

//View of all shopping list
app.post("/api/list", (req, res) => {
  router.insertOne(
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

//View of search
app.post("/api/search", (req, res) => {
  router.insertOne(
    ["username", "searchId", "searchName"],
    [req.body.username, req.body.searchId, req.body.searchName],
    data => {
      res.json({ id: data.insertId });
    }
  );
});

module.exports = router;

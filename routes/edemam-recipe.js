const router = require("express").Router();

const { RecipeSearchClient } = require('edamam-api');

router.get("/api/recipe/:search", async (req, res) => {
  const client = new RecipeSearchClient({
    appId: "a67a7625",
    appKey: "330f6f1844c57d982682197df2522fac"
  });

  const results = await client.search({ query: req.params.search });

  res.json(results);
});

module.exports = router;

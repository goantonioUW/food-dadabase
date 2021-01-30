const router = require("express").Router();

const { RecipeSearchClient } = require('edamam-api');

router.get("/api/recipe/:search", async (req, res) => {
  const client = new RecipeSearchClient({
    appId: require("../config/options")("EDEMAM_ID"),
    appKey: require("../config/options")("EDEMAM_API")
  });

  const results = await client.search({ query: req.params.search });

  res.json(results);
});

module.exports = router;

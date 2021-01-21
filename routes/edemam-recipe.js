const RecipeSearchClient = require('edamam-api');

const client = new RecipeSearchClient({
  appId: 'a67a7625',
  appKey: '330f6f1844c57d982682197df2522fac'
});

const results = await client.search({ query: 'recipe' });

module.exports = RecipeSearchClient;
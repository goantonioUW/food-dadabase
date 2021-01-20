const FoodDatabaseClient = require('edamam-api');

const client = new FoodDatabaseClient({
  appId: '648945ae',
  appKey: '9c04f3d0df77d40467639acb1e0f9783'
});

const foods = client.search({ query: 'Flour' });

module.exports = FoodDatabaseClient;
const RecipeSearchClient = require('edamam-api');

const client = new RecipeSearchClient({
  appId: 'a67a7625',
  appKey: '330f6f1844c57d982682197df2522fac'
});

const results = await client.search({ query: 'recipe' });

module.exports = RecipeSearchClient;



// ALTERNATIVE NPM PACKAGE OPTION IF ABOVE DOESN'T WORK?
// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://edamam-recipe-search.p.rapidapi.com/search',
//   qs: {q: 'chicken'},
//   headers: {
//     'x-rapidapi-key': 'c930b966e2msh9a86c91bca1a38dp15309djsna8c2098489f5',
//     'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });
const NutritionAnalysisClient = require('edamam-api');

(async () => {

  const client = new NutritionAnalysisClient({
    appId: 'c4ace18e',
    appKey: '61a72cb802340a2bff07b54479815f94'
  });

  const results = await client.search({ query: '' });

})();

module.exports = NutritionAnalysisClient;
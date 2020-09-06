const getCategories = require('./getCategories');
const processSearchQueryResults = require('./processSearchQueryResults');
const signResponse = require('./signResponse');

module.exports = (data) => {
  const response = {
    categories: getCategories(data.filters),
    items: processSearchQueryResults(data.results),
  };

  const signedResponse = signResponse(response);

  return signedResponse;
};

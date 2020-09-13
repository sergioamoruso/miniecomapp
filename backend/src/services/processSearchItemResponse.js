const processSearchItemResult = require('./processSearchItemResult');
const signResponse = require('./signResponse');

module.exports = (data, description, category) => {
  const response = {
    item: processSearchItemResult(data, description, category),
  };

  const signedResponse = signResponse(response);

  return signedResponse;
};

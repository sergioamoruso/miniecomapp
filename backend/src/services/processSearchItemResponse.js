const processSearchItemResult = require('./processSearchItemResult');
const signResponse = require('./signResponse');

module.exports = (data, description) => {
  const response = {
    item: processSearchItemResult(data, description),
  };

  const signedResponse = signResponse(response);

  return signedResponse;
};

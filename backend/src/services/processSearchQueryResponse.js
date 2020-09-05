const getCategories = require('./getCategories');
const processItems = require('./processItems');
const signResponse = require('./signResponse');

module.exports = (data) => {
    const response = {
        categories: getCategories(data.filters),
        items: processItems(data.results),
    }

    const signedResponse = signResponse(response);

    return signedResponse;
}
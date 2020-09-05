const config = require('./config');

module.exports = (response) => {
  const signature = {
    author: {
      name: config.apiSignatureName,
      lastName: config.apiSignatureLastName,
    },
  };

  const signed = {
    ...signature,
    ...response,
  };

  return signed;
};

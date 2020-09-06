const axios = require('axios');
const config = require('../services/config');
const logger = require('pino')({ name: 'Search Query Handler' });
const processSearchQueryResponse = require('../services/processSearchQueryResponse');

module.exports = async (req, res) => {
  const requestUrl = `${config.mercadoLibreBaseUrl}/sites/${config.mercadoLibreSiteId}/search?q=${req.query.q}`;
  logger.info(
    { requestUrl },
    'Executing MercadoLibre API search query request...'
  );

  try {
    const raw = await axios.get(requestUrl);
    logger.info(
      { statusCode: raw.status },
      'MercadoLibre API search query request successful'
    );

    const processed = processSearchQueryResponse(raw.data);
    logger.info(
      'MercadoLibre API search query response processed successfully'
    );

    res.status(200).send(processed);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      logger.error(
        {
          responseStatusCode: error.response.status,
          responseData: error.response.data,
        },
        'MercadoLibre API error'
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      logger.error({ request: error.request }, 'MercadoLibre API Error');
    } else {
      // Something happened in setting up the request that triggered an Error
      logger.error(error, 'Error when executing MercadoLibre API request');
    }

    const payload = {
      msg: 'Error when processing search query request',
      statusCode: error.response ? error.response.status : null,
      error: error.response ? error.response.data : null,
    };

    res.status(500).send(payload);
  }
};

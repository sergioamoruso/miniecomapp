const axios = require('axios');
const config = require('../services/config');
const logger = require('pino')({ name: 'Search Item Handler' });
const processSearchItemResponse = require('../services/processSearchItemResponse');

module.exports = async (req, res) => {
  const itemDataRequestUrl = `${config.mercadoLibreBaseUrl}/items/${req.params.id}`;
  const itemDescriptionRequestUrl = `${config.mercadoLibreBaseUrl}/items/${req.params.id}/description`;

  try {
    logger.info(
      { itemDataRequestUrl },
      'Executing MercadoLibre API search item request...'
    );
    const itemDataResponse = await axios.get(itemDataRequestUrl);
    logger.info(
      { statusCode: itemDataResponse.status },
      'MercadoLibre API search item request successful'
    );

    logger.info(
      { itemDescriptionRequestUrl },
      'Executing MercadoLibre API search item description request...'
    );
    const itemDescriptionResponse = await axios.get(itemDescriptionRequestUrl);
    logger.info(
      { statusCode: itemDescriptionResponse.status },
      'MercadoLibre API search item description request successful'
    );

    const processed = processSearchItemResponse(
      itemDataResponse.data,
      itemDescriptionResponse.data
    );
    logger.info(
      'MercadoLibre API search item and description responses processed successfully'
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
      msg: 'Error when processing search item request',
      statusCode: error.response ? error.response.status : null,
      error: error.response ? error.response.data : null,
    };

    res.status(500).send(payload);
  }
};

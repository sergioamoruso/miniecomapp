const express = require('express');
const config = require('./services/config');
const searchQueryHandler = require('./handlers/searchQueryHandler');

const PORT = config.serverPort;

const app = express();

app.get('/api/items', searchQueryHandler);

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

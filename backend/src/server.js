const express = require('express');
const config = require('./services/config');
const searchQueryHandler = require('./handlers/searchQueryHandler');
const searchItemHandler = require('./handlers/searchItemHandler');

const PORT = config.serverPort;

const app = express();

app.get('/api/items', searchQueryHandler);

app.get('/api/items/:id', searchItemHandler);

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

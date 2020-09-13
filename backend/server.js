const express = require('express');
const config = require('./src/services/config');
const searchQueryHandler = require('./src/handlers/searchQueryHandler');
const searchItemHandler = require('./src/handlers/searchItemHandler');

const PORT = config.serverPort;

const app = express();

app.get('/api/items', searchQueryHandler);

app.get('/api/items/:id', searchItemHandler);

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

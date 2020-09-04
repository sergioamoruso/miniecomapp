const express = require('express');
const config = require('./services/config');

const PORT = config.serverPort;

const app = express();

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

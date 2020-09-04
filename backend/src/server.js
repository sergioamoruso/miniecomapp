const express = require('express');

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));


const express = require('express');

const PORT = 3030;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('teste dockerizando node com express');
});

app.listen(PORT, HOST);

const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, '.')));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
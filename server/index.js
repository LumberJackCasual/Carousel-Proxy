const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.resolve('public')));

app.use((req, res, next) => {
  console.log(`Carousel Proxy serving ${req.method} from ${req.path}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Carousel Proxy listening on port ${PORT}`);
});
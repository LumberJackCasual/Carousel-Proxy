const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const PORT = 3000;
const reviews = 'http://localhost:3003';
let productId;

app.use(express.static(path.resolve('public')));

app.use((req, res, next) => {
  console.log(`Carousel Proxy serving ${req.method} from ${req.path}`);
  next();
});

app.get('/api/picture-service/:id', (req, res) => {
  axios.get(`http://localhost:3004${req.url}`)
    .then(response => {res.send(response.data)})
    .catch(err => res.send(err));
});

app.get('/api/reviews/:product_id', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.get('/api/reviews/:product_id/images', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.get('/api/reviews/:product_id/images/:place', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.patch('/api/reviews/:product_id/:id', (req, res) => {
  axios.patch(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
})

app.get(`/api/carousels/:id`, (req, res) => {
  axios.get(`http://localhost:3002${req.url}`)
    .then(response => {res.send(response.data)})
    .catch(err => res.send(err));
});

app.listen(PORT, () => {
  console.log(`Carousel Proxy listening on port ${PORT}`);
});
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const morgan = require('morgan');
const PORT = 3000;

const pictures = 'http://3.92.211.44:3004';
const reviews = 'http://18.222.123.111:3003';
const carousel = 'http://52.12.128.214:3002';

app.use(express.static(path.resolve('public')));

app.use(morgan('dev'));

app.get('/api/picture-service/:id', (req, res) => {
  axios.get(`${pictures}${req.url}`)
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
  axios.get(`${carousel}${req.url}`)
    .then(response => {res.send(response.data)})
    .catch(err => res.send(err));
});

app.listen(PORT, () => {
  console.log(`Carousel Proxy listening on port ${PORT}`);
});
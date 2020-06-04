const newrelic = require('newrelic')
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const compression = require('compression');

const app = express();
const PORT = 5500;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));

app.use('/reviews/:id', createProxyMiddleware({target: process.env.REVIEW_URL, changeOrigin: true}))

app.use('/products/:id', createProxyMiddleware({target: process.env.SUGGESTED_URL, changeOrigin: true}))
app.use('/get/random', createProxyMiddleware({target: process.env.SUGGESTED_URL, changeOrigin: true}))

app.use('/product/:id', createProxyMiddleware({target: process.env.INFO_URL, changeOrigin: true}))
app.use('/product/shop/:shopId', createProxyMiddleware({target: process.env.INFO_URL, changeOrigin: true}))
app.use('/product/colors/:id', createProxyMiddleware({target: process.env.INFO_URL, changeOrigin: true}))

app.use('/api/carousel/:id', createProxyMiddleware({target: process.env.CAROUSEL_URL, changeOrigin: true}))
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: process.env.CAROUSEL_URL, changeOrigin: true}))

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});

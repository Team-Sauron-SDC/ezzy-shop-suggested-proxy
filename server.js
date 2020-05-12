const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 4400;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));



app.use('/product/:id', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}))
app.use('/product/shop/:shopId', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}))
app.use('/product/colors/:id', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}))
app.use('/reviews/:id', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true}))
app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}))
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}))
app.use('/products/:id', createProxyMiddleware({target: 'http://localhost:4500', changeOrigin: true}))
app.use('/get/random', createProxyMiddleware({target: 'http://localhost:4500', changeOrigin: true}))


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


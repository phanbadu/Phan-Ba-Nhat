const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3003', // Địa chỉ backend server
      changeOrigin: true,
    })
  );
};

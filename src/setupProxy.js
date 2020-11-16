const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (server) {
  server.use(
    '/api',
    createProxyMiddleware({
      target: 'https://heroku-parametertree.herokuapp.com/',
      changeOrigin: true,
    })
  );
};

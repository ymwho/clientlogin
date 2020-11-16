const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (server) {
  server.use(
    '/api',
    createProxyMiddleware({
      target: 'https://git.heroku.com/heroku-parametertree.git',
      changeOrigin: true,
    })
  );
};

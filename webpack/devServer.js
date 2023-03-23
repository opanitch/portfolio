module.exports = {
  client: {
    overlay: true,
    progress: true,
  },
  compress: true,
  devMiddleware: {
    index: 'index.html',
    publicPath: '/',
  },
  historyApiFallback: true,
  host: '0.0.0.0',
  hot: true,
  port: 3000,
};

const path = require('path');

const aliases = require('./webpack/aliases');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

console.log('**********************************************');
console.log('*********** WEBPACK CONFIG ALIASES ***********');
console.log(aliases);
console.log('*********** WEBPACK CONFIG LOADERS ***********');
console.log(loaders);
console.log('*********** WEBPACK CONFIG PLUGINS ***********');
console.log(plugins);
console.log('************* WEBPACK CONFIG END *************');
console.log('**********************************************');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './public/'),
    // filename: 'mvb.js',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    // public: 'http://local.opanitch.com:3000'
    publicPath: '/',
  },
  entry: path.resolve(__dirname, './source/index.tsx'),
  module: {
    rules: loaders(),
  },
  plugins: plugins(),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/'),
  },
  resolve: {
    alias: aliases,
    extensions: ['.html', '.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
};

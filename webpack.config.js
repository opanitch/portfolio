const devServer = require('./webpack/dev-server');
const entry = require('./webpack/entry');
const loaders = require('./webpack/loaders');
const optimizations = require('./webpack/optimizations');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const resolve = require('./webpack/resolve');

const ENV = process.env.NODE_ENV;

if (ENV !== 'production') {
  console.log('**********************************************');
  console.log('********** WEBPACK NODE ENVIRONMENT **********');
  console.log(ENV);
  console.log('********** WEBPACK CONFIG DEV SERVER *********');
  console.log(devServer);
  console.log('************ WEBPACK CONFIG ENTRY ************');
  console.log(entry);
  console.log('*********** WEBPACK CONFIG LOADERS ***********');
  console.log(loaders);
  console.log('********* WEBPACK CONFIG OPTIMIZATIONS *******');
  console.log(optimizations);
  console.log('*********** WEBPACK CONFIG OUTPUT ************');
  console.log(output);
  console.log('*********** WEBPACK CONFIG PLUGINS ***********');
  console.log(plugins);
  console.log('*********** WEBPACK CONFIG RESOLVE ***********');
  console.log(resolve);
  console.log('************* WEBPACK CONFIG END *************');
  console.log('**********************************************');
}

module.exports = {
  devServer,
  entry,
  module: {
    rules: loaders(ENV),
  },
  plugins: plugins(ENV),
  optimization: optimizations(ENV),
  output: output(ENV),
  resolve,
};

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => ({
  minimizer: [
    // This will mangle our output to reduce size
    // new UglifyJSPlugin({
    //   parallel: true,
    // }),
  ],
  splitChunks: {
    minChunks: 2,
    cacheGroups: {
      vendors: false,
    },
  },
});

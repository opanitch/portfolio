const webpack = require('webpack');

module.exports = () => {
  return [
    // Establishes environment var for things like redux
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(env),
    // }),
  ];
};

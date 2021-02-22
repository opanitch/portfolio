const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (env) => {
  return [
    // Establishes environment var for things like redux
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/resume-md/images/**/*',
          to({ context, absoluteFilename }) {
            const nodePath = 'images\\';
            const outputPath = `assets/resume/${absoluteFilename.slice(
              absoluteFilename.indexOf(nodePath)
            )}`;

            return outputPath;
          },
        },
        {
          from: 'node_modules/resume-md/fonts/**/*',
          to({ context, absoluteFilename }) {
            const nodePath = 'fonts\\';
            const outputPath = `assets/resume/${absoluteFilename.slice(
              absoluteFilename.indexOf(nodePath)
            )}`;

            return outputPath;
          },
        },
        { from: 'node_modules/resume-md/resume.css', to: 'assets/resume' },
      ],
    }),
    new HtmlWebpackPlugin({
      chunks: ['main'],
      inject: true,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
      template: path.resolve(__dirname, '../index.html'),
      title: 'O.P Portfolio',
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CompressionPlugin({
      test: /\.(js|s?css|html|svg|json)$/,
    }),
  ];
};

// const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = () => {
  return [
    // Establishes environment var for things like redux
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(env),
    // }),
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
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg|json)$/,
    }),
  ];
};

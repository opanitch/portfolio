// const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

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
  ];
};

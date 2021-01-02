const path = require('path');

const postCSSPlugins = require('./postcss.config');

const dictionaryPath = path.resolve(__dirname, './assets/dictionary/');
const dictionaryLoader = {
  loader: 'dictionary-inline-loader',
  options: {
    delimiters: ['{{$ ', ' $}}'],
    escape: true,
    pathToDictionary: dictionaryPath,
  },
};
const dirList = ['../api', '../source'];

module.exports = () => {
  return [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: postCSSPlugins,
          },
        },
      ],
    },
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    // {
    //   test: /\.(ts|js)x?$/,
    //   include: dirList.map((file) => path.resolve(__dirname, file)),
    //   use: [dictionaryLoader, "babel-loader"],
    // },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]',
        esModule: false,
      },
    },
  ];
};

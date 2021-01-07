const path = require('path');

const postCSSPlugins = require('./postcss.config');

const dictionaryPath = path.resolve(__dirname, '../assets/dictionary/');
const dictionaryLoader = {
  loader: path.resolve('./build/dictionaryLoader/index.js'),
  options: {
    delimiters: ['{{@ ', ' @}}'],
    escape: true,
    pathToDictionary: dictionaryPath,
  },
};
const dirList = ['../api', '../public', '../source'];
const resumeDir = path.resolve(__dirname, '../node_modules/resume-md');

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
      test: /\.(html)$/,
      include: [resumeDir],
      use: [
        dictionaryLoader,
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/resume',
          },
        },
      ],
    },
    {
      test: /\.(ts|js)x?$/,
      include: dirList.map((file) => path.resolve(__dirname, file)),
      use: [dictionaryLoader],
    },
    {
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
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

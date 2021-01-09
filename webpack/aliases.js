const path = require('path');

module.exports = {
  // API
  API: path.resolve(__dirname, '../api/'),
  CONSTANTS: path.resolve(__dirname, '../api/constants/'),

  // Application
  Components: path.resolve(__dirname, '../source/components'),

  // Assets
  ASSETS: path.resolve(__dirname, '../assets/'),

  // Resume
  resume$: path.resolve(__dirname, '../node_modules/resume-md/resume.html'),
};

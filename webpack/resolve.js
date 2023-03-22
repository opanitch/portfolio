const path = require('path');

const aliases = require('./aliases');

module.exports = {
  alias: aliases,
  extensions: ['.html', '.js', '.ts', '.tsx'],
  modules: [path.resolve(__dirname, '../node_modules')],
  symlinks: false,
};

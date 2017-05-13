/* eslint-disable global-require */
const reactToolboxVariables = require('./reactToolbox.config.js');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    }),
  ],
};

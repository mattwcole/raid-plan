/* eslint-disable global-require */
const reactToolboxVariables = require('./src/reactToolbox');

module.exports = {
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    }),
  ],
};

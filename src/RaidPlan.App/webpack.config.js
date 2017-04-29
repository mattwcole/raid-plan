const webpack = require('webpack');
const path = require('path');

module.exports = function configure(env) {
  const isProduction = env === 'production';

  return {
    entry: {
      app: './src/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.jsx+$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: !isProduction
      ? []
      : [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: module => module.context && module.context.includes('node_modules'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
        }),
      ],
  };
};

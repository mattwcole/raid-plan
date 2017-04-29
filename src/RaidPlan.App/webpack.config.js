const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      sourceComments: true,
      plugins() {
        return [require('postcss-cssnext')]; // eslint-disable-line global-require
      },
    },
  },
];

module.exports = function configure(env) {
  const isProduction = env === 'production';

  return {
    entry: {
      app: isProduction ? './src/index.jsx' : ['react-hot-loader/patch', './src/index.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: isProduction
            ? ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: cssLoaders,
            })
            : ['style-loader', ...cssLoaders],
        },
      ],
    },
    plugins: isProduction
      ? [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: module => module.context && module.context.includes('node_modules'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest',
        }),
        new ExtractTextPlugin({
          filename: '[name].[contenthash].css',
          allChunks: true,
        }),
      ]
      : [],
  };
};

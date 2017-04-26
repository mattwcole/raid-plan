import webpack from 'webpack';
import path from 'path';

export default env => ({
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: env && env.production ? '[name].[chunkhash].js' : '[name].js',
  },
  devtool: env.production ? 'source-map' : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx+$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: !env.production
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
});

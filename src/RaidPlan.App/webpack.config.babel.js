import path from 'path';

export default {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx+$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
};

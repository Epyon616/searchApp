import webpack from 'webpack';
import path from 'path';

export default {
  context: path.resolve(__dirname, './src'),
  entry:  {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        }],
      },
    ],
  },
};

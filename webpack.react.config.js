const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
      },
      entry: './src/index.tsx',
      target: 'electron-renderer',
      devtool: 'source-map',
    module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
            loader: 'style-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
            loader: 'css-loader',
        },
      },
      {
        test: /\.(jpg|svg|png)$/,
        exclude: /node_modules/,
        use: {
            loader: 'file-loader'
        },
    }
    ],
  },
    devServer: {
        contentBase: path.join(__dirname, '../dist/renderer'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
        publicPath: '/',
    },
    output: {
        path: path.resolve(__dirname, '../dist/renderer'),
        filename: 'js/combat-manager.js',
        publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
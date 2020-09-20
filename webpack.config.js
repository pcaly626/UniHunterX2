
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleResolutionKind } = require('typescript');

// module.exports = [
//   {
//     mode: "development",
//     entry:`${__dirname}/src/electron.ts`,
//     target: "electron-main",
//     module:{
//       rules:[{
//         test:/\.ts|\.tsx$/,
//         include: `${__dirname}/src`,
//         use: [{loader: "awesome-typescript-loader"}, {loader: "babel-loader"}]
//       }]
//     },
//     output:{
//       path: __dirname + '/dist',
//       filename: 'electron.js'
//     }
//   },
//   {
//     mode: "development",
//     entry:"./src/index.tsx",
//     target: "electron-renderer",
//     devtool:'source-map',
//     module:{
//       rules:[{
//         test:/\.ts(x?)$/,
//         include: `${__dirname}/src`,
//         use: [{loader: "awesome-typescript-loader"}, {loader: "babel-loader"}]
//       }]
//     },
//     output:{
//       path: `${__dirname}/dist`,
//       filename: 'combat-manager.js'
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './public/index.html'
//       })
//     ]
//   }
// ];
const path = require("path");
const loader = require('awesome-typescript-loader');

module.exports = [
  {
    mode: "development",
    target: 'electron-main',
    entry: { index: path.resolve(__dirname, "src", "index.tsx") },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "electron.js"
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          include: path.resolve(__dirname,'src'),
          use: ['awesome-typescript-loader']
        }
      ],
    }
  },
  {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','index.tsx'),
    target: 'electron-renderer',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'combat-manager.js'
    },
    module: { rules: [{
      test: /\.(tsx)$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname,'src'),
      use: ['babel-loader']
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ] },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      })
    ]
  }
]
const path = require("path");
const webpack = require("webpack");
/* mini-css-extract-plugin extracts our CSS out of the JavaScript 
 * bundle into a separate file, essential for production builds. 
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === "development"
  return {
  /* The point or points where to start the application bundling 
   * process. 
  */
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          }, 
          "eslint-loader"
        ],
      },
      {
        test: /\.module\.(sc|sa|c)ss$/,
        use: [
          /* style-loader injects our styles into our DOM by creating 'style' 
           * nodes from JS strings 
          */
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            /* css-loader interprets @import and @url and resolves them 
             * (css-loader requires style-loader in order to work) 
            */
            loader: "css-loader", 
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            /* Converts SCSS into CSS */
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/,
        /* 'loader' is a shorthand for the 'use' property, when
         * only one loader is being utilized. 
        */
       exclude: /\.module\.(sc|sa|c)ss$/,
       use: [
        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, 
          "css-loader", 
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  /* Allows us to specify which extensions Webpack will resolve,
   * allowing us to import modules without adding their extensions. 
  */
  resolve: { extensions: ["*", ".js", ".jsx", ".scss"] },
  /* Where to place bundled code. */
  output: {
    path: path.resolve(__dirname, "dist/"),
    /* Directory in which the bundle should go, and where 
     * 'webpack-dev-server' should serve files from.
    */
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  /* 'webpack-dev-server' set up */
  devServer: {
    /* Location we're serving static files from */
    contentBase: path.join(__dirname, "public/"),
    /* Port to run server */
    port: 3000,
    /* Tells server where our bundled code is. */
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  /* Adding source map for better error logs - reference 
   * to original file that raised an error instead of the bundled file 
  */
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css" 
    })
  ]
}};
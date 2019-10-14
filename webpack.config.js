const path = require("path");
const webpack = require("webpack");


module.exports = {
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
        test: /\.s[ac]ss$/i,
        /* 'loader' is a shorthand for the 'use' property, when
         * only one loader is being utilized. 
         * (css-loader requires style-loader in order to work) 
        */
        use: [
          // Creates `style` nodes from JS strings
          "style-loader", 
          // Translates CSS into CommonJS
          "css-loader", 
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  /* Allows us to specify which extensions Webpack will resolve,
   * allowing us to import modules without adding their extensions. 
  */
  resolve: { extensions: ["*", ".js", ".jsx"] },
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
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
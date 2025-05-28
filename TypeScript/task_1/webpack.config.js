const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",  // Ensures Webpack runs in development mode
  entry: "./js/main.ts",  // Entry point for TypeScript file
  
  devtool: "inline-source-map",  // Useful for debugging the code
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Match TypeScript files
        loader: 'ts-loader',  // Use ts-loader to transpile TypeScript files
        options: {
          transpileOnly: true  // Only transpile (skip type-checking for performance)
        }
      }
    ]
  },
  
  resolve: {
    extensions: [".tsx", ".ts", ".js"],  // Resolve TypeScript and JavaScript files
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve static files from the 'dist' directory
    },
    open: true,  // Automatically open the browser after the server starts
    port: 8080,  // Set the port for the development server
  },
  
  plugins: [
    new ForkTsCheckerWebpackPlugin(),  // Check for TypeScript type errors in parallel
    new CleanWebpackPlugin(),  // Clean the output directory before each build
    new HtmlWebpackPlugin({
      title: "Development"  // Title of the HTML template
    })
  ],
  
  output: {
    filename: "bundle.js",  // Output file name
    path: path.resolve(__dirname, "dist")  // Output directory (dist)
  }
};

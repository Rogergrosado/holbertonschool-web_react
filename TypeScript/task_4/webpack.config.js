const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./js/main.ts", // Entry point to main.ts

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true, // Ensure fast compilation
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these file types
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 8080,
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(), // Type checking in a separate process
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],

  output: {
    filename: "bundle.js", // Output the bundled JavaScript file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};

const EslintWebpackPlugin = require("eslint-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const path = require("node:path");
const sourceMapSupport = require("source-map-support");

sourceMapSupport.install({ environment: "node" });

module.exports = {
  entry: "./src/extension.ts",
  output: {
    filename: "extension.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  },
  target: "node",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "tsconfig.json"
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: {
    vscode: "commonjs vscode"
  },
  optimization: {
    nodeEnv: false,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          keep_classnames: true
        }
      })
    ]
  },
  plugins: [
    new EslintWebpackPlugin({
      cache: false,
      extensions: ["js", "ts"]
    }),
    new ForkTSCheckerWebpackPlugin()
  ]
};

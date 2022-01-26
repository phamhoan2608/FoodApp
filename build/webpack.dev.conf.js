const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: ["./src/index.js"], // string | object | array
  output: {
    path: __dirname + '/build', // string (default)
    filename: "bundle.js", // string (default)
    publicPath: "./assets/", // string
    uniqueName: "food-app", // (defaults to package.json "name")
  },
  stats: {
    preset: "errors-only",
    env: true,
    outputPath: true,
    publicPath: true,
    assets: true,
    modules: true,
    children: true,
    logging: true,
    loggingTrace: true,
    warnings: true,
    errors: true,
    errorDetails: true,
    errorStack: true,
    moduleTrace: true,
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
    version: true,
    hash: true,
  },
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    static: path.join(__dirname, 'public'), // boolean | string | array | object, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
    outputModule: true,
    topLevelAwait: true,
  },
  plugins: [
    // ...
  ]
}
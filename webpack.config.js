const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // The context of our entry points
  context: path.join(__dirname, 'src'),

  /*
  Our entry point.  You can specify multiple entry points here and produce
  multiple JavaScript bundles.
  */
  entry: './entry.js',

  output: {
    // Path of our build directory
    path: path.join(__dirname, 'build'),

    // What we want our JavaScript bundle to be called
    filename: 'bundle.js'
  },
  module: {
    // When webpack comes across a...
    loaders: [
      // .html file load it with the file-loader
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },

      /*
      .js file load it with the babel-loader.  This transpiles all of our ES6
      code into ES5 code that all browsers can understand.  We want to avoid
      transpiling any references to node_modules (they will already be ES5).
      Config for the babel-loader can be found in .babelrc.
      */
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },

      /*
      .css file load it with css-loader before passing it onto style-loader.
      You may be wondering what ExtractTextPlugin is.  Without this the styles
      are actually apart of your bundle.js.  In this case we want to avoid bloating
      the bundle unnecessarily and just have our own .css file in the build.
      */
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },
  plugins: [
    /*
    What we want ExtractTextPlugin to name our .css file.  I initially thought
    that i shouldn't need to provide a name, it should just grab the original
    filename.  But what ExtractTextPlugin does is compiles ALL .css file references
    into a single .css file.  This means if you have 5 .css files that need to be
    used you can bundle them together and avoid making multiple HTTP requests.
    They can be split up individually if that is what you need...
    */
    new ExtractTextPlugin('style.css')
  ]
};

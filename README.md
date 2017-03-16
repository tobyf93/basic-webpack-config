# README
All of the files have been commented except for package.json (can't place comments in a .json file).

## package.json
This is the file that npm uses.  It should describe exactly how your project should operate.
```
{
  "name": "alex_webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",

  /*
  Build our project in production mode.  Important thing to note here is that it
  references a module that is a project dependency (webpack).  Avoid doing scripts
  like "webpack -p" because that assumes that the developer has installed webpack
  globally.  It also means that they may end up using a version of webpack that
  the original author never intended on using.
  */
  "scripts": {
    "build": "./node_modules/webpack/bin/webpack.js -p"
  },

  /*
  Lists all 3rd party dependencies required by the project (including webpack).  
  These dependencies are fetched from the npm repository using the "npm install"
  command and placed in the node_modules directory (never commit this directory).  
  This method for pulling in dependencies ensures that you get the correct version
  of all the dependencies.
  */
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.0",
    "babel-preset-es2015": "^6.24.0",
    "css-loader": "^0.27.3",
    "extract-text-webpack-plugin": "webpack-contrib/extract-text-webpack-plugin#webpack-1",
    "file-loader": "^0.10.1",
    "style-loader": "^0.14.0",
    "webpack": "^1.13.2"
  }
}
```

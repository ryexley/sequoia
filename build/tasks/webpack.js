import path from "path";
import gulp from "gulp";
import gulpUtil from "gulp-util";
import webpack from "webpack";
import config from "../config";

const webpackConfig = {
  entry: [
    "babel-polyfill",
    path.join( config.source, "js", "index" )
  ],
  output: {
    path: path.join( config.app, "js" ),
    filename: "index.js"
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  resolve: ["", ".js", ".jsx", ".json"],
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: config.source,
        loader: "babel-loader",
        query: {
          plugins: [ "transform-runtime" ],
          presets: [ "es2015", "react" ]
        }
      },
      { test: /\.(json)$/, loader: "json-loader" }
    ]
  },
  target: "electron",
  debug: true
};

gulp.task( "webpack", next => {
  webpack( webpackConfig, ( err, stats ) => {
    if ( err ) {
      throw new gulpUtil.PluginError( "webpack", err );
    }

    gulpUtil.log( "[webpack]\n\n", stats.toString( {
      colors: true,
      hash: true,
      version: true,
      timings: true,
      chunks: true,
      chunkModules: false,
      cached: true,
      cachedAssets: true
    } ), "\n" );

    next();
  } );
} );

import path from "path";
import gulp from "gulp"
import config from "../config";

gulp.task( "watch", [ "default" ], () => {

  gulp.watch( path.resolve( config.source, "css/**/*.pcss" ), [ "postcss" ] );
  gulp.watch( path.resolve( config.source, "js/**/*.js" ), [ "webpack" ] );
  gulp.watch( [
    path.resolve( config.source, "index.html" ),
    path.resolve( config.source, "index.js" )
  ], [ "copy:static" ] )

} );

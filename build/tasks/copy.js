import path from "path";
import gulp from "gulp";
import config from "../config";

gulp.task( "copy:static", () => {

  gulp.src( path.join( config.source, "index.html" ) )
      .pipe( gulp.dest( config.app ) );

  gulp.src( path.join( config.source, "index.js" ) )
      .pipe( gulp.dest( config.app ) );

} );

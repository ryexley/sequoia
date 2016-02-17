import path from "path";
import gulp from "gulp";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import imports from "postcss-easy-import";
import nested from "postcss-nested";
import variables from "postcss-simple-vars";
import mixins from "postcss-mixins";
import csswring from "csswring";
import config from "../config";

const processors = [
  autoprefixer( { browsers: [ "last 2 version" ] } ),
  imports( { path: `${ config.source }/css` , glob: true } ),
  mixins,
  nested,
  variables(),
  csswring( {
    removeAllComments: false
  } )
];

gulp.task( "postcss", [ "clean:css" ], () => {

  gulp.src( path.join( config.source, "css", "main.css" ) )
      .pipe( sourcemaps.init() )
      .pipe( postcss( processors ) )
      .pipe( sourcemaps.write( "." ) )
      .pipe( gulp.dest( path.join( config.app, "css" ) ) );

} );

import path from "path";
import gulp from "gulp";
import del from "del";
import config from "../config";

gulp.task( "clean:app", () => {
  del.sync( [ `${ config.app }/**/*` ] );
} );

gulp.task( "clean:css", () => {
  del.sync( [ `${ config.app }/css/**/*.css` ] );
} );

gulp.task( "clean:js", () => {
  del.sync( [ `${ config.app }/js/**/*.js` ] );
} );

gulp.task( "clean:static", () => {
  del.sync( [
    `${ config.app }/index.html`,
    `${ config.app }/index.js`
  ] );
} );

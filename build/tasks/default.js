import gulp from "gulp";

gulp.task( "default", [ "clean:app", "webpack", "postcss", "copy:static" ] );

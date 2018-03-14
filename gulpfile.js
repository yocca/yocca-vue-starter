'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: "./public"
	});
	gulp.watch("public/**/*").on('change', browserSync.reload);
});

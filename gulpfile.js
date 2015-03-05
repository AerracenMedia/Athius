"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    rename = require("gulp-rename"),
    sass = require("gulp-sass");

var main = require("./package.json").main;

gulp.task('sass', function() {
   return gulp.src("src/sass/**/*.scss")
        .pipe(sass())
        .pipe(concat("all.css"))
        .pipe(gulp.dest('app/lib'));
});

gulp.task('scripts', function() {
  return gulp.src(main)
    .pipe(browserify({
          insertGlobals : true,
          debug : false
    }))
    .pipe(rename("build.js"))
    .pipe(gulp.dest('app/lib'))
    .pipe(rename("build.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('app/lib'));
});

gulp.task('watch', function() {
  gulp.watch("src/**/*.js", ['scripts']);
  gulp.watch("src/sass/**/*.scss", ['sass']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);

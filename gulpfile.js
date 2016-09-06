'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('templates', () => {
  gulp.src(['src/**/*.pug', '!src/**/_*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass({
      includePaths: ['bower_components']
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor', () => {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});

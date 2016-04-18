var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('vulcanize', () => {
	return gulp.src('compatibility/**/*.js')
		.pipe(requirejsOptimize())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
	return gulp.src('css/*.css')
		.pipe(concat('all.css'))
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('transpile', () => {
  return gulp.src('src/**/*.js')
  		.pipe(babel({
  			presets: ['es2015']
  		}))
  		.pipe(gulp.dest('compatibility'));
});

gulp.task('build', ['vulcanize', 'styles', 'transpile']);

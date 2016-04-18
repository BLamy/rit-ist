var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var babel = require('gulp-babel');

gulp.task('vulcanize', () => {
	return gulp.src('compatibility/**/*.js')
		.pipe(requirejsOptimize())
		.pipe(gulp.dest('dist'));
});


gulp.task('transpile', () => {
  return gulp.src('src/**/*.js')
  		.pipe(babel({
  			presets: ['es2015']
  		}))
  		.pipe(gulp.dest('compatibility'));
});

gulp.task('build', ['vulcanize', 'transpile']);

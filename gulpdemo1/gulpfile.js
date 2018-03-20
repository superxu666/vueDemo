var gulp = require('gulp')
var csso = require('gulp-csso')
var autoprefixer = require('gulp-autoprefixer')
var del = require('del')
var gulpwatch = require('gulp-watch')
var connect = require('gulp-connect')

gulp.task('deldist', function() {
  return del(['dist'])
})

gulp.task('html', function() {
  return gulp.src('app/**/*.*')
  .pipe(gulpwatch('app/**/*.*'))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload())
})

gulp.task('serve', function() {
  return connect.server({
    root: 'dist',
    port: '9999',
    livereload: true
  })
})


gulp.task('default', ['serve', 'html'])

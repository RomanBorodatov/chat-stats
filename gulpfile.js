var gulp       = require('gulp'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function() { 
  browserSync({ 
      server: { 
          baseDir: 'src' 
      },
  });
});

gulp.task('styles', function() {
  return gulp.src('src/styles/main.css')
    .pipe(cssnano())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/styles/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync', 'styles'], function() {
    gulp.watch('src/styles/main.css', ['styles']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/scripts/*.js', browserSync.reload);
});
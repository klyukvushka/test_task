var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require("gulp-csso");
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require ("gulp-uglify");
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var pump = require("pump");
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var copy = require('gulp-copy');

gulp.task('fonts', function(){
    return gulp.src('src/font/**/*.{eot,ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest('dist/font'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
  browserSync.watch("dist", browserSync.reload)
});
 
gulp.task('sass', function () {
    return gulp.src('src/styles/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(csso())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));
  });

gulp.task("images", function (){
	gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
});

gulp.task('javascript', function (cb) {
    pump([
          gulp.src(['src/javascript/slick.min.js', "src/javascript/main.js"]),
          concat('build.js'),
          uglify(),
          gulp.dest('dist/javascript')
      ],
      cb
    );
  });

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ["fonts","browser-sync", 'sass', 'images', "javascript", "html"], function() {
    gulp.watch(['src/styles/**/*.scss'], ['sass']);
    gulp.watch(['src/images/**/*'], ['images']);
    gulp.watch(["src/javascript/*.js"], ["javascript"]);
    gulp.watch(["src/*.html"], ["html"]);
});

gulp.task("default", ['watch']); 


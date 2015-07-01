
// dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    gulpFilter = require('gulp-filter'),
    livereload = require('gulp-livereload'),
    mainBowerFiles = require('main-bower-files'),
    // ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2Js = require("gulp-ng-html2js"),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// paths
var sources = {
  app: {
    js: ['./app/**/*.js'],
    sass: ['./app/**/*.scss']
  },
  images: ['./img/**/*.*'],
  fonts: ['./assets/fonts/**/*.*'],
  index: ['./index.html'],
  templates: ['./app/**/*.html', '!./app/index.html']
};
var destinations = {
  css: './dist/css/',
  fonts: './dist/fonts/',
  images: './dist/images/',
  js: './dist/js/',
  root: './dist/'
};

/* JAVASCRIPTS */

// concat and minify vendor js
gulp.task('vendorJs', function() {

  gulp.src([
    './js/jquery.js',
    './js/jquery.fittext.js',
    './js/jquery.easing.min.js',
    './js/wow.min.js',
    './js/bootstrap.js',
    './js/classie.js',
    // './js/cbpAnimatedHeader.js',
    // './js/classie.js',
    './js/creative.js',
  ])
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest(destinations.js))
  .pipe(livereload());
});

// concat and minify app js
gulp.task('appJs', function() {
  gulp.src(sources.app.js)
  //.pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  // .pipe(ngAnnotate())
  .pipe(uglify()) // do we need these extra params?
  //.pipe(sourcemaps.write("."))
  .pipe(gulp.dest(destinations.js))
  .pipe(livereload());
});

/* STYLES */

gulp.task('vendorStyles', function() {

  gulp.src([
    './css/bootstrap.min.css',
    './font-awesome/css/font-awesome.min.css',
    './css/animate.min.css',
    './css/creative.css'
  ])
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest(destinations.css));

});

// concat and compress application css
gulp.task('appStyles', function() {
  gulp.src(sources.app.sass)
    .pipe(sass())
    .pipe(rename('app.css'))
    //TODO: add minify & sourcemaps
    .pipe(gulp.dest(destinations.css))
    .pipe(livereload());
});

/* FONTS */
gulp.task('fonts', function() {
  return gulp.src([
      './font-awesome/fonts/fontawesome-webfont.eot',
      './font-awesome/fonts/fontawesome-webfont.svg',
      './font-awesome/fonts/fontawesome-webfont.ttf',
      './font-awesome/fonts/fontawesome-webfont.woff',
      './font-awesome/fonts/fontawesome-webfont.woff2',
      './font-awesome/fonts/Fontawesome.otf'
    ])
    .pipe( flatten() )
    .pipe( gulp.dest(destinations.fonts) )
    .pipe( livereload() );
});

/* HTML */

/* COPY */

//copy images to dist
gulp.task('images', function() {
  gulp.src(sources.images)
  .pipe(gulp.dest(destinations.images))
  .pipe(livereload());
});

//copy index to dist
gulp.task('index', function() {
  gulp.src(sources.index)
  .pipe(gulp.dest(destinations.root))
  .pipe(livereload());
});

/* GULP */

//build
gulp.task('build', [
  'vendorJs',
  'appJs',
  'vendorStyles',
  'appStyles',
  'images',
  'fonts',
  'index'
]);

//watch scripts, styles, and templates
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(sources.app.js, ['appJs']);
  gulp.watch(sources.app.sass, ['appStyles']);
  gulp.watch(sources.images, ['images']);
  gulp.watch(sources.index, ['index']);
  gulp.watch('./bower.json', ['vendorJs', 'vendorStyles', 'fonts']);
});

//default
gulp.task('default', ['build', 'watch']);

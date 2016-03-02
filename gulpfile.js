'use strict';

var gulp =          require('gulp');
var gulputil =      require('gulp-util');
var rename =        require("gulp-rename");
var less =          require('gulp-less');
var cssmin =        require('gulp-minify-css');
var uglify =        require('gulp-uglify');
var jshint =        require('gulp-jshint');
var del =           require('del');
var browserify =    require('browserify');
var browserSync =   require('browser-sync');
var source =        require('vinyl-source-stream');
var buffer =        require('vinyl-buffer');
var babelify =      require('babelify');
var del =           require('del');
var reload =        browserSync.reload;

var src = {
        "base_dir": "./",
        "app_dir": "./app/",
        "less": "./app/css/less",
        "scss": "./app/css",
        "semui": "./semantic/dist",
        "semuijs": "./semantic/dist/*.js",
        "jqueryjs": "./node_modules/jquery/dist/*.js",
        "semuicss": "./semantic/dist/*.css",
        "jsextra": "./app/js/extras/",
        "js_app" : "app.js",
        "jsx_dir": "./app/js/",
        "jsx_app": "app.jsx",
        "jsx_filter": "./app/js/**/*.jsx",
        "index_html": "index.html",
    };

var dest = {
        "style": "styles.css",
        "js": "scripts.js",
        "app": "app.js",
        "fonts": "fonts/",
        "styles": "css/",
        "scripts": "js/",
        "dist": "./dist/",
        "base_dir": "./"
    };


gulp.task('jsx', function() {
  console.log('gulp jsx.')
  return browserify(src.jsx_dir + src.jsx_app )
    .transform(babelify, {presets: ['es2015', 'react']}) // Babel transforms
    .bundle()
    .pipe(source(dest.app))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest.dist + dest.scripts))
});

/**
 * keeping semantic css build seperate so this can be
 * replaced easily with any css library
 */
gulp.task('semantic-copyjs',function(){
  gulp.src(src.semuijs)
  .pipe(gulp.dest(dest.dist + dest.scripts ));
});

gulp.task('jquery-copyjs',function(){
  gulp.src(src.jqueryjs)
  .pipe(gulp.dest(dest.dist + dest.scripts ));
});


gulp.task('js',['semantic-copyjs','jquery-copyjs'], function() {
  console.log('gulp js.');
  return browserify(src.jsextra + src.js_app )
    .bundle()
    .on('error',function(e){
      gulputil.log(e)
    })
    .pipe(source(dest.js))
    .pipe(gulp.dest(dest.dist + dest.scripts))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(dest.dist + dest.scripts))

});

/**
 * keeping semantic css build seperate so this can be
 * replaced easily with any css library
 */
gulp.task('semantic-copycss',function(){
  gulp.src(src.semuicss)
  .pipe(gulp.dest(dest.dist + dest.styles ));
});

gulp.task('styles',['semantic-copycss'], function() {
  console.log('gulp styles.')
});

gulp.task('fonts', function() {
  console.log('gulp fonts.')
});

gulp.task('watch', function() {
  gulp.watch(src.base_dir + src.index_html,['default',reload]);
  gulp.watch(src.js, ['js'],reload);
  gulp.watch(src.semuijs, ['semantic-copyjs',reload]);
  gulp.watch(src.css, ['css'],reload);
  gulp.watch(src.semuicss, ['semantic-copycss',reload]);
  gulp.watch(src.jsx_filter, ['jsx',reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: dest.base_dir
    },
    port: 3000
  })
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});

gulp.task('clean', function(cb) {
  return del(['dist'], cb);
});

gulp.task('build', ['clean'], function(){
  return gulp.start( [ 'js', 'styles', 'fonts','jsx']);
});

gulp.task('serve', ['clean','build','watch'], function(){
  gulp.start( ['browserSync'],reload)
});

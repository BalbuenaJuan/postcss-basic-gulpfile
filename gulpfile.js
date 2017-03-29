/**
 * Created by Juan on 29/03/2017.
 */

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var cssnano = require('cssnano');
var doImport = require("postcss-import");
var cssnext = require("postcss-cssnext");
var cssnested  = require("postcss-nested");
var server = require("gulp-server-livereload");
var watch = require('gulp-watch');

gulp.task('css', function () {
    var plugins = [
        doImport(),
        cssnested(),
        cssnext({browsers: ['last 2 version']}),
        cssnano()
    ];
    return gulp.src('./src/css/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('server', function() {
    gulp.src('./')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            directoryListing: true,
            open: true
        }));
});

gulp.task("watch", function () {
    gulp.watch("./src/css/*.css", ["css"]);
});

gulp.task("default", ["watch", "server"]);
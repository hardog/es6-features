"use static"

var gulp = require('gulp'),
    fs = require('fs'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    _ = require('underscore');

// =============== file path =================
var featuresPath = './features/';
var buildPath = './build/';
var compileFiles = featuresPath + '/*.js';
var execFileName = 'index.js';

// =============== compile es6 file ================
gulp.task('es5', function(){
    var fileList = fs.readdirSync(featuresPath);

    _.each(fileList, function(v, k){
        gulp.src(featuresPath + v)
            .pipe(babel({compact:false}))
            .pipe(rename(v.replace(/\.js/, '') + '_build.js'))
            .pipe(gulp.dest(buildPath));
    });
});

// =============== default gulp task ===============
gulp.task('default', ['es5']);
"use static"

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename');

// =============== file path =================
var featuresPath = './features';
var compileFiles = featuresPath + '/*.js';
var execFileName = 'index.js';
var execPath = './';

// =============== compile es6 file ================
gulp.task('es5', function(){
    gulp.src(compileFiles)
        .pipe(babel({compact:false}))
        .pipe(rename(execFileName))
        .pipe(gulp.dest(execPath));
});

// =============== default gulp task ===============
gulp.task('default', ['es5']);
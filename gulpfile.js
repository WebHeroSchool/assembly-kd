const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');


gulp.task('build-css', () => {
    return gulp.src(['css/*.css'])
        .pipe(contact('index.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('build/css'));
});

gulp.task('build-js', () => {
    return gulp.src(['scripts/*.js'])
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('build', ['build-css', 'build-js']);
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', () => {
    return gulp.src(['css/*.css'])
        .pipe(sourcemaps.init())
            .pipe(contact('index.css'))
            .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('build-js', () => {
    return gulp.src(['scripts/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('index.js'))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('build', ['build-css', 'build-js']);
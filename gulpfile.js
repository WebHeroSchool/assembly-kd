const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gupl.task('copyCss', () => {
    return gulp.src(['css/*.css'])
        .pipe(gulp.dest('build/css'));
});

gulp.task('copyJs', () => {
    return gulp.src(['scripts/*.js'])
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
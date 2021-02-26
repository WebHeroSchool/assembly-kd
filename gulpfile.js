const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const paths = {
    src: {
        styles: 'src/styles/*.css',
        scripts: 'src/scripts/*.js'
    },
    build: {
        styles: 'build/styles',
        scripts: 'build/scripts'
    },
    buildNames: {
        styles: 'index.min.css',
        scripts: 'index.min.js'
    }
}

gulp.task('build-css', () => {
    return gulp.src([paths.src.styles])
        .pipe(sourcemaps.init())
            .pipe(contact(paths.buildNames.styles))
            .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.build.styles));
});

gulp.task('build-js', () => {
    return gulp.src([paths.src.scripts])
        .pipe(sourcemaps.init())
            .pipe(concat(paths.buildNames.scripts))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.build.scripts));
});

gulp.task('build', ['build-css', 'build-js']);

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(paths.src.styles, ['css-watch']);
    gulp.watch(paths.src.scripts, ['js-watch']);
});

gulp.task('css-watch', ['css'], () => browserSync.reload());
gulp.task('js-watch', ['js'], () => browserSync.reload());

gulp.task('prod', ['build']);
gulp.task('dev', ['build', 'browser-sync']);
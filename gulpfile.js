const gulp = require('gulp');

gupl.task('copyCss', () => {
    return gulp.src(['css/*.css'])
        .pipe(gulp.dest('build/css'));
});

gulp.task('copyJs', () => {
    return gulp.src(['scripts/*.js'])
        .pipe(gulp.dest('build/js'));
})
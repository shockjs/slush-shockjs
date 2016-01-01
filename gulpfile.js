const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => {
  gulp.src(['slushfile.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach('compact', process.stderr));
});

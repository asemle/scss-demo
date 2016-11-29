import gulp from 'gulp';
import concat from 'gulp-concat'; //bundles files
import sass from 'gulp-sass'; //sass compiling/translating
import babel from 'gulp-babel'; //es6 translating
import plumber from 'gulp-plumber'; //gives errors for compiling

const paths = {
  scssSource: './styles/**/*.scss',
  scssDest: './compiled/styles',
};

gulp.task('styles', () => {
  return gulp.src(paths.scssSource)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(paths.scssDest));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.scssSource, ['styles']);
});

gulp.task('default', ['watch', 'styles']);

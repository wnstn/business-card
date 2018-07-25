import gulp     from 'gulp';
import include  from 'gulp-include';
import bs       from 'browser-sync';

gulp.task('combine', function () {
  gulp.src('./src/index.html')
    .pipe(include())
    .pipe(gulp.dest('./dist/'));

  return bs.reload();
})

function dev() {
  bs.create();

  return bs.init({
    server: {
      baseDir: './dist/'
    }
  })
}

gulp.watch('src/*', ['combine'])

function build() {
  return gulp.src('./src/index.html')
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest('./dist'));
}

gulp.task('dev', dev);
gulp.task('build', build);

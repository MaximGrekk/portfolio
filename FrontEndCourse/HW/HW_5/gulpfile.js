const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

//

gulp.task('connect', async function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//

gulp.task('reload', function(){
  gulp.src('public/**/*.*')
  .pipe(connect.reload());
});

//

gulp.task('autoPrefixCSS', function(){
    return gulp.src('css/*.css')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 25 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});

//

gulp.task('clone-files', function(){
    return gulp.src('app/**/*.*')
    .pipe(gulp.dest('public/'));
});

//

gulp.task('deleteFiles', function(){
    return del('public/**')
});

//

gulp.task('imagemin', async function(){
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
    .pipe(connect.reload());
});

gulp.task('watchFiles', async function(){
    gulp.watch('app/**/*.css', gulp.series('autoPrefixCSS')); // 1 параметр - файлы, которые отслеживаем, 2 -  функции при изменении файлов
    gulp.watch('app/**/*.*', gulp.series('reload'));
    gulp.watch('app/**/*.*', gulp.series('imagemin'));
})

gulp.task('build', gulp.series('deleteFiles', 'clone-files', 'autoPrefixCSS', 'imagemin'));
gulp.task('default', gulp.series('build', gulp.parallel('watchFiles', 'connect')))




//  .pipe(connect.reload()); для перезагрузки браузера
//  gulp.task('default', ['connect', 'watch']); таск по умолчанию

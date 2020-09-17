const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();

gulp.task('Hello', function(callback){
    console.log("Hello");
    callback();
});

gulp.task('my-second-task', function(callback){
    console.log("This is our second task");
    callback();
});

// КЛОНИРОВАНИЕ ФАЙЛОВ
// All files: app/*.*
//  All folders: app/**/*.*
// Only one .html file: app/index.html
gulp.task('clone-files', function(){
    return gulp.src('app/**/*.*')
    .pipe(gulp.dest('public/'));
});

// МИНИМИЗАЦИЯ CSS
gulp.task('minifyCSS', function(){
    return gulp.src('app/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'));
});

// gulp.task('minifyJS', function(){
//     return gulp.src('app/js/*.js')
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('public/js'));
// });

// МИНИМИЗАЦИЯ JS
gulp.task('minifyJS', function(){
    return pipeline(
        gulp.src('app/js/index.js'),
        uglify(),
        gulp.dest('public/')
  );
});

// АВТОПРЕФИКСЫ
gulp.task('autoPrefixCSS', function(){
    return gulp.src('app/css/*.css')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 20 versions'],
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'));
});

// УДАЛЕНИЕ ФАЙЛОВ
gulp.task('deleteFiles', function(){
    return del('public/**/');
});

// It is not working :-(
// gulp.task('serve', function(){
//     browserSync.init({
//         server: 'public'
//     });
//     browserSync.watch('public/**/*.*').on('change', browserSync.reload);
// });

// СИНХРОНИЗАЦИЯ БРАУЗЕРА С ПОМОЩЬЮ browserSync
// It is working :-(
gulp.task('serveMyProject', function(){
    browserSync.init({
        server: {
        baseDir: "myProject/HW_4/", // THIS IS SOLVE OF THE PROBLEM
     }
    });
    browserSync.watch('myProject/**/*.*').on('change', browserSync.reload);
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
        baseDir: "public/",
        // index: "index.html"
        directory: true
     }
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watchFiles', function(){
    gulp.watch('app/css/*.css', gulp.series('autoPrefixCSS')); // 1 параметр - файлы, которые отслеживаем, 2 -  функции при изменении файлов
    gulp.watch('app/js/*.js', gulp.series('minifyJS'));
})

gulp.task('watch', async function(){
    return gulp.series('watchFiles');
});

gulp.task('build', gulp.series('deleteFiles', 'clone-files', 'autoPrefixCSS', 'minifyJS', 'my-second-task'));
gulp.task('default', gulp.series('build', gulp.parallel('watchFiles', 'serve')))

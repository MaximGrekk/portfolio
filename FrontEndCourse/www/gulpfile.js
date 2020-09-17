const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


var reload = browserSync.reload;

gulp.task('sassToCSS', function() {
     return gulp.src('app/scss/*scss')
     .pipe(sass({
         errorLogToConsole: true,
         outputStyle: 'compressed'
     }))
     .on('error', console.error.bind(console))
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('public/css/'));
});
//
// gulp.task('autoprefixer', function () {
//     return gulp.src('public/css/main.min.css')
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 20 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('public/css'));
// });
//
gulp.task('serve', function(){
    browserSync.init({
        server: {
        baseDir: "public/",
        // index: "index.html"
        directory: true
     }
    });
    browserSync.watch('public/**/*.*').on('change', reload);
});

gulp.task('watchFiles', function(){
    gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
    // gulp.watch('public/css/main.min.css', gulp.series('autoprefixer'));
});

gulp.task('default', gulp.parallel('watchFiles', 'serve'));

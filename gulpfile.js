var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browsersync = require('browser-sync'),
    concat      = require('gulp-concat'),
    ugli        = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    imagemin    = require('gulp-imagemin');
gulp.task('image', function(){
    return gulp.src('app/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});
gulp.task('cssnano', ['sasswork'], function(){
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
});
gulp.task('scripts', function(){
    return gulp.src(['app/libs/jquery/dist/jquery-3.3.1.min.js','app/libs/magnific-popup/dist/jquery.magnific-popup.min.js','app/libs/parallax/deploy/jjquery.parallax.min.js','app/libs/mmenu/dist/jquery.mmenu.all.js ',])
    .pipe(concat('libs.min.js'))
    .pipe(ugli())
    .pipe(gulp.dest('app/js'))
});
gulp.task('sasswork', function(){
    return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.reload({stream: true}))
});
gulp.task('br-sync',function(){
   browsersync({
       server: {
           baseDir: 'app'
       },
       notify: false
   });
});
gulp.task('watch', ['br-sync', 'cssnano'], function(){
    gulp.watch('app/sass/*.sass',['sasswork']);
    gulp.watch('app/*.html', browsersync.reload);
    gulp.watch('app/js/**/*.js', browsersync.reload);
});
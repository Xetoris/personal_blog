var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var config = {
    bootstrapDir: './bower_components/bootstrap',
    jqueryDir: './bower_components/jquery',
    tetherDir: './bower_components/tether',
    assetDir: './apps/web/assets'
};

gulp.task('css', function() {
    return gulp.src(config.bootstrapDir + '/scss/bootstrap-flex.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.assetDir + '/css'));
});

gulp.task('lint', function(){
    // When I write some javascript, Lint it!
});

gulp.task('js', function(){
   return gulp.src(config.bootstrapDir + '/dist/js/bootstrap.min.js')
       .pipe(gulp.dest(config.assetDir + '/js'))
    && gulp.src(config.jqueryDir + '/dist/jquery.min.js')
           .pipe(gulp.dest(config.assetDir+'/js'))
    && gulp.src(config.tetherDir + '/dist/js/tether.min.js')
           .pipe(gulp.dest(config.assetDir+'/js'));
});

gulp.task('default', ['lint', 'css', 'js']);
var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var config = {
    bootstrapDir: './bower_components/bootstrap',
    jqueryDir: './bower_components/jquery',
    tetherDir: './bower_components/tether',
    assetDir: './apps/web/assets',
    publicDir: './apps/web/assets/public'
};

gulp.task('css', function() {
    return gulp.src(config.bootstrapDir + '/scss/bootstrap-flex.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.publicDir + '/css'))
        && gulp.src(config.assetDir + '/sass/personal_blog.css')
            .pipe(sass())
            .pipe(gulp.dest(config.publicDir +'/css'));
});

gulp.task('lint', function(){
    // When I write some javascript, Lint it!
});

gulp.task('js', function(){
   return gulp.src(config.bootstrapDir + '/dist/js/bootstrap.min.js')
       .pipe(gulp.dest(config.publicDir + '/js'))
    && gulp.src(config.jqueryDir + '/dist/jquery.min.js')
           .pipe(gulp.dest(config.publicDir+'/js'))
    && gulp.src(config.tetherDir + '/dist/js/tether.min.js')
           .pipe(gulp.dest(config.publicDir+'/js'));
});

gulp.task('imgs', function(){
    return gulp.src(config.assetDir + '/images/*.{png,jpg}')
        .pipe(gulp.dest(config.publicDir + '/imgs'));
});

gulp.task('default', ['lint', 'css', 'js', 'imgs']);
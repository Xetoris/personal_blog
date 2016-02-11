var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var config = {
    bootstrapDir: './bower_components/bootstrap',
    jqueryDir: './bower_components/jquery',
    tetherDir: './bower_components/tether',
    fpjsDir: './bower_components/fullpage.js',
    assetDir: './apps/web/assets',
    publicDir: './apps/web/assets/public'
};

gulp.task('clean-css', function(){
    return gulp.src(config.publicDir + '/css/*.css', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('css', ['clean-css'], function() {
    return gulp.src(config.assetDir + '/sass/personal_blog.css')
            .pipe(sass({ includePaths: [config.bootstrapDir + '/scss'] }))
            .pipe(gulp.dest(config.publicDir +'/css'));
});

gulp.task('lint', function(){
    return gulp.src(config.assetDir + '/javascript/*.js')
        .pipe(eslint());
});

gulp.task('clean-js', function(){
   return gulp.src(config.publicDir + '/js/*.js', {read: false})
       .pipe(clean());
});

gulp.task('js', ['clean-js'], function(){
    return gulp.src(config.assetDir + '/javascript/*.js')
        .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('imgs', function(){
    return gulp.src(config.assetDir + '/images/*.{png,jpg}')
        .pipe(gulp.dest(config.publicDir + '/imgs'));
});

gulp.task('third-party', function(){
   return gulp.src(config.bootstrapDir + '/dist/js/bootstrap.min.js')
           .pipe(gulp.dest(config.publicDir + '/js'))
       && gulp.src(config.jqueryDir + '/dist/jquery.min.js')
           .pipe(gulp.dest(config.publicDir+'/js'))
       && gulp.src(config.tetherDir + '/dist/js/tether.min.js')
           .pipe(gulp.dest(config.publicDir+'/js'));
});

gulp.task('default', ['lint', 'css', 'js', 'imgs', 'third-party']);
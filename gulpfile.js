var gulp = require('gulp');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');

var config = {
    bootstrapDir: './apps/web/assets/bower/bootstrap',
    publicDir: './public'
};

gulp.task('css', function() {
    return gulp.src(config.bootstrapDir + '/scss/bootstrap-flex.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('lint', function(){
    // When I write some javascript, Lint it!
});

gulp.task('default', ['lint', 'css']);
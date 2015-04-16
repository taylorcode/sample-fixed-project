var gulp = require('gulp'),
    compass = require('gulp-compass'),
    htmlmin = require('gulp-htmlmin'),
    ngTemplates = require('gulp-ng-templates'),
    appName = 'sampleApp';

gulp.task('compass', function() {
  gulp.src('app/styles/*.sass')
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/styles',
      sass: 'app/styles'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('templates', function () {
    gulp.src('app/views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: '_partials.js',
            module: appName + ':partials',
            path: function (path, base) {
                // just the filename
                return path.substr(base.length).slice(0, -'.html'.length);
            }
        }))
        .pipe(gulp.dest('app/scripts'));
});

// watch files for changes
gulp.task('watch', function() {
    // should configure gulp newer for these tasks
    gulp.watch('app/styles/*.sass', ['compass']);
    gulp.watch('app/views/*.html', ['templates']);
});

// Development Tasks
gulp.task('dev', ['compass', 'templates']);

// Local tasks
gulp.task('default', ['compass', 'templates', 'watch']);
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths = {
        examples: 'examples/src/ex-*.html'
    };

gulp.task('examples', function() {
    return gulp.src(paths.examples)
    .pipe(plugins.nunjucksRender())
    .pipe(gulp.dest('examples/'));
});

gulp.task('watch', function() {
    gulp.watch([paths.examples,'examples/src/layout.html'], ['examples']);
});

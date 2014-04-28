var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths = {
        examples: 'examples/src/ex-*.html',
        dotgraphs: 'images/src/*.gv.txt'
    };

gulp.task('dotgraphs', function() {
    return gulp.src(paths.dotgraphs)
    .pipe(plugins.spawn({
        cmd: 'dot',
        args: ['-Tsvg'],
        filename: function(base, ext) {
            return base + '.svg';
        }
    }))
    .pipe(gulp.dest('images/'));
});

gulp.task('examples', function() {
    return gulp.src(paths.examples)
    .pipe(plugins.nunjucksRender())
    .pipe(plugins.replace(/\/\/(\s+)hidecode/g, '// (…)<span class="hidden">'))
    .pipe(plugins.replace(/\/\/(\s+)endhidecode/g, '// </span>'))
    .pipe(gulp.dest('examples/'));
});

gulp.task('watch-examples', ['examples'], function() {
    gulp.watch([paths.examples,'examples/src/layout.html'], ['examples']);
});

gulp.task('watch-dotgraphs', ['dotgraphs'], function() {
    gulp.watch([paths.dotgraphs], ['dotgraphs']);
});

gulp.task('build', ['examples', 'dotgraphs'], function() {
});


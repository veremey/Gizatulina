var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');
//webserver
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: config.dest.root
        },
        files: [config.dest.root + '*.html', config.dest.css + '*.css', config.dest.js + '*.js'],
        port: 1080,
        notify: false,
        ghostMode: false,
        online: false,
        open: true
    });
});
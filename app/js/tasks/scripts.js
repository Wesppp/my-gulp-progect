const {src, dest} = require('gulp'),
sourcemaps =    require('gulp-sourcemaps'),
gulpIf =        require('gulp-if'),
concat =        require('gulp-concat'),
notify =        require('gulp-notify'),
multipipe =     require('multipipe')

isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'

module.exports = function scripts() {
    return multipipe(
        src('app/js/**.js'),
        (gulpIf(isDevelopment, sourcemaps.init())),
        (concat('app.min.js')),
        (gulpIf(isDevelopment, sourcemaps.write())),
        (dest('public/js'))
    ).on('error', notify.onError())
}
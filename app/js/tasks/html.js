const {src, dest} = require('gulp'),
htmlmin =       require('gulp-htmlmin'),
gulpIf =        require('gulp-if'),
include =       require('gulp-file-include'),
multipipe =     require('multipipe'),
sourcemaps =    require('gulp-sourcemaps'),
notify =        require('gulp-notify')

isDevelopment = process.env.NODE_ENV === 'development';

module.exports = function html() {
    return multipipe(
        src('app/**.html'),
        (gulpIf(isDevelopment, sourcemaps.init())),
        (include({
            prefix: '@@'
        })),
        (htmlmin({
            collapseWhitespace: true
        })),
        (gulpIf(isDevelopment, sourcemaps.write())),
        (dest('public'))
    ).on('error', notify.onError())
}
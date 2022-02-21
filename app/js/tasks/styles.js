const {src, dest} = require('gulp'),
gulpIf =        require('gulp-if'),
multipipe =     require('multipipe'),
sourcemaps =    require('gulp-sourcemaps'),
notify =        require('gulp-notify'),
sass =          require('gulp-sass')(require('sass')),
csso =          require('gulp-csso'),
concat =        require('gulp-concat'),
autoprefixer =  require('gulp-autoprefixer')

isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'

module.exports = function scss() {
    return multipipe(
        src('app/scss/**.scss'),
        (gulpIf(isDevelopment, sourcemaps.init())),
        (sass()),
        (autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
        })),
        (csso()),
        (concat('main.css')),
        (gulpIf(isDevelopment, sourcemaps.write())),
        (dest('public/css'))
    ).on('error', notify.onError())
}
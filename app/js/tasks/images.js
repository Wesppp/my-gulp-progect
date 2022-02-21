const {src, dest} = require('gulp'),
imagemin =      require('gulp-imagemin'),
notify =        require('gulp-notify'),
multipipe =     require('multipipe')

module.exports = function images() {
    return multipipe (
        src('app/img/**/*'),
        (imagemin()),
        (dest('public/imgs'))
    ).on('error', notify.onError()) 
}
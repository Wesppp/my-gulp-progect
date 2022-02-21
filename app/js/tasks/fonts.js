const {src, dest} = require('gulp'),
fonter =        require('gulp-fonter'),
notify =        require('gulp-notify'),
multipipe =     require('multipipe')

module.exports = function fonts() {
    return multipipe (
        src('app/fonts/**.*'),
        (fonter({
            subset: [66,67,68, 69, 70, 71],
            formats: ["ttf", "otf", "eot", "woff", "svg"]
        })),
        (dest('public/fonts'))
    ).on('error', notify.onError())
}
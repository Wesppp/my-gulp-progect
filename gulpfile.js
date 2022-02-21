const {series, watch, parallel} = require('gulp'),
del =           require('del'),
sync =          require('browser-sync').create()
let isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'

const html = require('./app/js/tasks/html.js'),
      scss = require('./app/js/tasks/styles.js'),
      scripts = require('./app/js/tasks/scripts.js'),
      images = require('./app/js/tasks/images.js'),
      fonts = require('./app/js/tasks/fonts.js')

function clear() {
    return del('public')
}

function watched() {
    watch('app/**.html', series(html));
    watch('app/scss/**.scss', series(scss));
    watch('app/js/**.js', series(scripts));
    watch('app/parts/**.html', series(html));
}

function serve() {
    sync.init({
        server: './public'
    })

    watch('public/**/*.*').on('change', sync.reload)
}

exports.build = series(clear, parallel(scss, scripts, fonts, images, html))
exports.serve = series(clear, scss, scripts, fonts, images, html, parallel(watched, serve))
exports.clear = clear



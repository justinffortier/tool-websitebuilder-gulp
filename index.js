const Browse = require('./browse.js')
const Clean = require('./clean.js')
const Fonts = require('./fonts.js')
const Help = require('./help.js')
const Images = require('./images.js')
const Javascript = require('./javascript.js')
const Kit = require('./codeKit.js')
const Robots = require('./robots.js')
const Sass = require('./sass.js')
const Sitemap = require('./sitemap.js')
const Video = require('./video.js')
const Docs = require('./docs.js')

class WebsiteBuilder {
  constructor (gulp, config) {
    this.browse = new Browse(gulp, config)
    this.clean = new Clean(gulp, config)
    this.fonts = new Fonts(gulp, config)
    this.help = new Help(gulp, config)
    this.images = new Images(gulp, config)
    this.javascript = new Javascript(gulp, config)
    this.kit_localized = new Kit(gulp, config)
    this.sass = new Sass(gulp, config)
    this.sitemap = new Sitemap(gulp, config)
    this.robots = new Robots(gulp, config)
    this.video = new Video(gulp, config)
    this.docs = new Docs(gulp, config)

    gulp.task(`default`, gulp.series(`help`))

    gulp.task(
      `build`,
      gulp.series(
        `clean`,
        gulp.parallel(
          `sass`,
          `js`,
          `kit`,
          `images`,
          `fonts`,
          `video`,
          `docs`
        ),
        gulp.parallel(
          `sitemap`,
          `robots`
        )
      ),
      (callback) => { callback() }
    )

    gulp.task(
      `develop`,
      gulp.series(
        `build`,
        `browse`,
        gulp.parallel(`watch-js`, `watch-sass`, `watch-kit`)
      ),
      (callback) => { callback() }
    )

    gulp.task(
      `scss`,
      gulp.series(
        `clean`,
        gulp.parallel(
          `sass`,
        ),
      ),
      (callback) => { callback() }
    )
  }
}

module.exports = WebsiteBuilder

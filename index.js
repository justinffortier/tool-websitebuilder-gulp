/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

import Browse from './browse.js'
import Clean from './clean.js'
import Fonts from './fonts.js'
import Help from './help.js'
import Images from './images.js'
import Javascript from './javascript.js'
import Kit from './codeKit.js'
import Robots from './robots.js'
import Sass from './sass.js'
import Sitemap from './sitemap.js'
import Video from './video.js'
import Docs from './docs.js'

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
  }
}

module.exports = WebsiteBuilder

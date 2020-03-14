const sitemap = require('gulp-sitemap')
const Base = require('./base.js')

class Sitemap extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    this.config = config
    this.gulp.task(`sitemap`, () => this.generate())
  }

  generate() {
    const { baseUrl } = this.config
    return this.gulp.src(`./dist/**/*.html`)
      .pipe(sitemap({
        siteUrl: baseUrl
      }))
      .pipe(this.dest())
  }
}

module.exports = Sitemap

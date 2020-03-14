const robots = require('gulp-robots')

const Base = require('./base.js')

class Robots extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    gulp.task(`robots`, () => this.robots())
  }

  robots() {
    return this.gulp.src(`./dist/index.html`)
      .pipe(robots({
        useragent: `*`,
        disallow: [`js/`, `css/`],
        sitemap: `sitemap.xml`
      }))
      .pipe(this.dest())
  }
}

module.exports = Robots

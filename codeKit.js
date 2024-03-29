const util = require('gulp-util')
const kit = require('gulp-kit')
const htmlmin = require('gulp-htmlmin')
const gulpif = require('gulp-if')
const mustache = require('gulp-mustache')
const rename = require('gulp-rename')
const Base = require( './base')

class Kit extends Base {
  constructor (gulp, config) {
    super(gulp, config)

    gulp.task(`kit`, () => this.kit())
    gulp.task(`watch-kit`, () => gulp.watch([`./src/pages/**/*.kit`, `./src/views/widgets/*.kit`, `./src/views/common/*.kit`], gulp.series(`kit`)))
  }

  kit () {
    return this.gulp.src(`./src/pages/**/*.kit`)
      .pipe(kit())
      .on(`error`, (err) => {
        util.log(err.message)
      })
      .pipe(mustache(`./src/locales/${this.language()}/strings.json`))
      .pipe(gulpif(this.config.release, htmlmin({ collapseWhitespace: true })))
      .pipe(rename((path) => {
        path.basename = `index`
        path.extname = `.html`
      }))
      .pipe(this.dest())
  }
}

module.exports = Kit

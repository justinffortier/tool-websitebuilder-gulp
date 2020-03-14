/* eslint import/no-extraneous-dependencies: 0 */

import util from 'gulp-util'
import kit from 'gulp-kit'
import htmlmin from 'gulp-htmlmin'
import gulpif from 'gulp-if'
import mustache from 'gulp-mustache'
import rename from 'gulp-rename'

import Base from './base'

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
      .pipe(mustache(`./locales/${this.language()}/strings.json`))
      .pipe(gulpif(this.config.release, htmlmin({ collapseWhitespace: true })))
      .pipe(rename((path) => {
        path.basename = `index`
        path.extname = `.html`
      }))
      .pipe(this.dest())
  }
}

export default Kit

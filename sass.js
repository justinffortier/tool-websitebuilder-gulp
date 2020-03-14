/* eslint import/no-extraneous-dependencies: 0 */

import cleanCSS from 'gulp-clean-css'
import gulpSass from 'gulp-sass'
import gulpif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'

import Base from './base'

class Sass extends Base {
  constructor (gulp, config) {
    super(gulp, config)

    gulp.task(`sass`, () => this.sass())
    gulp.task(`watch-sass`, () => gulp.watch(`./src/assets/css/**/*`, gulp.series(`sass`)))
  }

  sass () {
    return this.gulp.src(`./src/assets/css/**/*.*`)
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.init()))
      .pipe(gulpSass({ includePaths: [`./node_modules/`] }).on(`error`, gulpSass.logError))
      .pipe(cleanCSS())
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.write()))
      .pipe(this.dest(`assets/css`))
  }
}

export default Sass

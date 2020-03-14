/* eslint import/no-extraneous-dependencies: 0 */

import imagemin from 'gulp-imagemin'
import gulpif from 'gulp-if'

import Base from './base.js'

class Images extends Base {
  constructor (gulp, config) {
    super(gulp, config)

    gulp.task(`main-images`, () => this.mainImages())
    gulp.task(`images`, gulp.series(`main-images`))
  }

  mainImages () {
    return this.src(`/assets/img/**/**`)
      .pipe(gulpif(this.release, imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: true }
          ]
        })
      ])))
      .pipe(this.dest(`assets/img`))
  }
}

export default Images

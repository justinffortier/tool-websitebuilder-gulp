const imagemin = require('gulp-imagemin')
const gulpif = require('gulp-if')
const Base = require('./base.js')

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

module.exports = Images

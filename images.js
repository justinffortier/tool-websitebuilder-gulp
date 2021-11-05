const imagemin = require('gulp-imagemin')
const gulpif = require('gulp-if')
const Base = require('./base.js')

class Images extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    this.config = config

    const watchPath = this.config.imageWatchPath || '`./src/assets/images/**/*`'
    gulp.task(`main-images`, () => this.mainImages())
    gulp.task(`images`, gulp.series(`main-images`))
    gulp.task(`watch-images`, () => {
      console.log('Watching images at: ', watchPath);
      return gulp.watch(watchPath, gulp.series(`main-images`))
    })
  }

  mainImages() {
    const { imgDest, imgSrcPath } = this.config
    const dest = imgDest || `assets/images`
    const src = imgSrcPath || `./src/assets/images`
    return this.gulp.src(src + '/*')
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
      .pipe(this.dest(dest))
  }
}

module.exports = Images

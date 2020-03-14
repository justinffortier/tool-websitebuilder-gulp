const Base = require('./base.js')

class Video extends Base {
  constructor(gulp, config) {
    super(gulp, config)

    gulp.task(`video`, () => this.videos())
  }

  videos() {
    return this.src(`/assets/video/**`)
      .pipe(this.dest(`assets/video`))
  }
}

module.exports = Video

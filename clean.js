const rm = require('gulp-rm')
const Base = require('./base.js')

class Delete extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    gulp.task(`clean`, () => this.clean())
  }

  clean () {
    return this.gulp.src(`dist/**/*`, { read: false })
      .pipe(rm())
  }

  cleanScss () {
    const { scssDest } = this.config
    if (!scssDest) {
      console.log('Config: "scssDest" is required to clean Scss ');
      return;
    }
    return this.gulp.src(scssDest, { read: false })
      .pipe(rm())
  }

  cleanJs () {
    const { jsDest } = this.config
    if (!jsDest) {
      console.log('Config: "jsDest" is required to clean Scss ');
      return;
    }
    return this.gulp.src(jsDest, { read: false })
      .pipe(rm())
  }
}

module.exports = Delete

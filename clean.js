const rm = require('gulp-rm')
const Base = require('./base.js')

class Delete extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    this.config = config;
    gulp.task(`clean`, () => this.clean())
    gulp.task(`cleanScss`, () => this.cleanScss())
    gulp.task(`cleanJs`, () => this.cleanJs())
    gulp.task(`cleanFonts`, () => this.cleanFonts())
  }

  clean() {
    return this.gulp.src(`dist/**/*`, { read: false })
      .pipe(rm())
  }

  cleanScss() {
    const { scssDest } = this.config
    if (!scssDest) {
      console.log('Config: "scssDest" is required to clean Scss ');
      return;
    }
    return this.gulp.src(`${scssDest}/**/*`, { read: false })
      .pipe(rm())
  }

  cleanJs() {
    const { jsDest, distPath } = this.config
    if (!jsDest) {
      console.log('Config: "jsDest" is required to clean Js ');
      return;
    }
    return this.gulp.src(`${distPath}/${jsDest}/**/*`, { read: false })
      .pipe(rm())
  }

  cleanFonts() {
    const { fontDest } = this.config
    if (!fontDest) {
      console.log('Config: "fontDest" is required to clean Js ');
      return;
    }
    return this.gulp.src(`${fontDest}/**/*`, { read: false })
      .pipe(rm())
  }
}

module.exports = Delete

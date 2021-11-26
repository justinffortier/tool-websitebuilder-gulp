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
    const { scssDestPath } = this.config
    if (!scssDestPath) {
      console.log('Config: "scssDestPath" is required to clean Scss ');
      return;
    }
    return this.gulp.src(`${scssDestPath}/**/*`, { read: false })
      .pipe(rm())
  }

  cleanJs() {
    const { jsDestPath, distPath } = this.config
    if (!jsDestPath) {
      console.log('Config: "jsDestPath" is required to clean Js ');
      return;
    }
    return this.gulp.src(`${distPath}/${jsDestPath}/**/*`, { read: false })
      .pipe(rm())
  }

  cleanFonts() {
    const { fontDestPath } = this.config
    if (!fontDestPath) {
      console.log('Config: "fontDestPath" is required to clean Js ');
      return;
    }
    return this.gulp.src(`${fontDestPath}/**/*`, { read: false })
      .pipe(rm())
  }
}

module.exports = Delete

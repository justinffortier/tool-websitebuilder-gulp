const Base = require('./base.js')

class Fonts extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    this.config = config

    gulp.task(`fonts`, () => this.fonts())
  }

  fonts() {
    const { fontDest } = this.config
    console.log(fontDest);

    const dest = fontDest || `assets/webfonts`
    return this.gulp.src(`./node_modules/@fortawesome/fontawesome-free/webfonts/*`)
      .pipe(this.dest(dest))
  }
}

module.exports = Fonts

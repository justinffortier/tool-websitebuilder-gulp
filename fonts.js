const Base = require('./base.js')

class Fonts extends Base {
  constructor(gulp, config) {
    super(gulp, config)
    this.config = config

    const watchPath = this.config.fontWatchPath || '`./src/assets/fonts/**/*`'
    gulp.task(`fonts`, () => this.fonts())
    gulp.task(`watch-fonts`, () => {
      console.log('Watching Fonts at: ', watchPath);
      return gulp.watch(watchPath, gulp.series(`fonts`))
    })
  }

  fonts() {
    const { fontDestPath, fontSrc } = this.config
    const dest = fontDestPath || `assets/webfonts`
    const src = fontSrc || `./node_modules/@fortawesome/fontawesome-free/webfonts/*`
    return this.gulp.src(src + '/*')
      .pipe(this.dest(dest))
  }
}

module.exports = Fonts

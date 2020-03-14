const Base = require('./base.js')

class Docs extends Base {
  constructor (gulp, config) {
    super(gulp, config)

    gulp.task(`docs`, () => this.docs())
  }

  docs () {
    return this.src(`/assets/Docs/**`)
      .pipe(this.dest(`assets/docs`))
  }
}

module.exports = Docs

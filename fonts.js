const Base = require ('./base.js')

class Fonts extends Base {
  constructor (gulp, config) {
    super(gulp, config)

    gulp.task(`fonts`, () => this.fonts())
  }

  fonts () {
    console.log('FONNNNNNTSSS!');
    
    return this.gulp.src(`./node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/*`)
      .pipe(this.dest(`webfonts`))
  }
}

module.exports = Fonts

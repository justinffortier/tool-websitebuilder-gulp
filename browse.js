const server = require('gulp-server-io')
const Base = require('./base')

class Browse extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    this.gulp.task(`browse`, () => this.browse())
  }

  browse () {
    return this.gulp.src(`./dist`)
      .pipe(server({
        port: this.port,
        host: `localhost`,
        https: false
      })).on(`error`, this.log)
  }
}

module.exports = Browse

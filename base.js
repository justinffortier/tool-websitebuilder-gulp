const Yargs = require('yargs')
const { argv } = Yargs
const gulpUtil = require('gulp-util')

class GulpBase {
  constructor (gulp, config) {
    this.gulp = gulp
    this._config = config
    this.util = gulpUtil
    this.log = gulpUtil.log

    this.port = argv.port || 8080
    this.lang = argv.lang || `en`
    this.region = argv.s3Region || `us-east-1`
    this.release = !!(argv.release)
  }

  dest (_folder) {
    const { distPath } = this._config
    const dist = distPath || `./dist`
    if (_folder) {
      return this.gulp.dest(`${dist}/${_folder}`)
    }
    return this.gulp.dest(dist)
  }

  src (_folder) {
    const folder = _folder || ``
    return this.gulp.src(`./src/${folder}`)
  }

  config (_lang) {
    return this._config
  }

  language () {
    return this.lang
  }
}

module.exports = GulpBase

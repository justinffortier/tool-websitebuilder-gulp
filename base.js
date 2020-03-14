/**
 * @Author: carterharrison
 * @Date:   2018-05-27T21:19:30-07:00
 * @Last modified by:   carterharrison
 * @Last modified time: 2018-05-27T21:19:36-07:00
 */

/* eslint import/no-extraneous-dependencies: 0 */

import { argv } from 'yargs'
import util from 'gulp-util'

class GulpBase {
  constructor (gulp, config) {
    this.gulp = gulp
    this._config = config
    this.util = util
    this.log = util.log

    this.port = argv.port || 8080
    this.lang = argv.lang || `en`
    this.region = argv.s3Region || `us-east-1`
    this.release = !!(argv.release)
  }

  dest (_folder) {
    if (_folder) {
      return this.gulp.dest(`./dist/${_folder}`)
    }
    return this.gulp.dest(`./dist`)
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

export default GulpBase

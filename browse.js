import server from 'gulp-server-io'

import Base from './base'

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

export default Browse

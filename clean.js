import rm from 'gulp-rm'

import Base from './base.js'

class Delete extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    gulp.task(`clean`, () => this.clean())
  }

  clean () {
    return this.gulp.src(`dist/**/*`, { read: false })
      .pipe(rm())
  }
}

export default Delete

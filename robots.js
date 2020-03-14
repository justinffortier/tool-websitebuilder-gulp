/**
 * @Author: carterharrison
 * @Date:   2018-05-27T21:26:39-07:00
 * @Last modified by:   carterharrison
 * @Last modified time: 2018-05-27T22:06:23-07:00
 */

/* eslint import/no-extraneous-dependencies: 0 */

import robots from 'gulp-robots'

import Base from './base.js'

class Robots extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    gulp.task(`robots`, () => this.robots())
  }

  robots () {
    return this.gulp.src(`./dist/index.html`)
      .pipe(robots({
        useragent: `*`,
        disallow: [`js/`, `css/`],
        sitemap: `sitemap.xml`
      }))
      .pipe(this.dest())
  }
}

export default Robots

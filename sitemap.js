/**
 * @Author: carterharrison
 * @Date:   2018-05-27T21:27:21-07:00
 * @Last modified by:   carterharrison
 * @Last modified time: 2018-05-27T21:28:28-07:00
 */

/* eslint import/no-extraneous-dependencies: 0 */

import sitemap from 'gulp-sitemap'

import Base from './base.js'

class Sitemap extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    this.config = config
    this.gulp.task(`sitemap`, () => this.generate())
  }

  generate () {
    const { baseUrl } = this.config
    return this.gulp.src(`./dist/**/*.html`)
      .pipe(sitemap({
        siteUrl: baseUrl
      }))
      .pipe(this.dest())
  }
}

module.exports = Sitemap

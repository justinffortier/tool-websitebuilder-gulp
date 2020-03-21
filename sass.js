const cleanCSS = require('gulp-clean-css')
const gulpSass = require('gulp-sass')
const gulpif = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
var concat = require('gulp-concat');
const stripCssComments = require('gulp-strip-css-comments');


const Base = require('./base')

class Sass extends Base {
  constructor(gulp, config) {
    super(gulp, config)

    gulp.task(`sass`, () => this.sass())
    gulp.task(`watch-sass`, () => gulp.watch(`./src/assets/css/**/*`, gulp.series(`sass`)))
  }

  sass() {
    return this.gulp.src(`./src/assets/css/all.scss`)
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.init()))
      .pipe(gulpSass({ includePaths: [`./node_modules/`] }).on(`error`, gulpSass.logError))
      .pipe(concat('all.min.css'))
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.write()))
      .pipe(stripCssComments({ preserve: false }))
      .pipe(cleanCSS())
      .pipe(this.dest('assets/css'));
  }
}

module.exports = Sass

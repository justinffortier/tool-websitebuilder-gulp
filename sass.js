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
    
    const { sassWatchPath } = config
    const watchPath = sassWatchPath || `./src/assets/css/**/*`
    gulp.task(`watch-sass`, () => gulp.watch(watchPath, gulp.series(`sass`)))
  }

  sass() {
    const { scssPath, scssDest } = config
    const path = scssPath || `./src/assets/css/all.scss`;
    const dest = scssDest || `assets/css`;

    return this.gulp.src(path)
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.init()))
      .pipe(gulpSass({ includePaths: [`./node_modules/`] }).on(`error`, gulpSass.logError))
      .pipe(concat('all.min.css'))
      .pipe(concat('all.css'))
      .pipe(gulpif(!this.gulp.optimize, sourcemaps.write()))
      .pipe(stripCssComments({ preserve: false }))
      .pipe(cleanCSS())
      .pipe(this.dest(dest));
  }
}

module.exports = Sass

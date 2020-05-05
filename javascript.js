const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const gulpif = require('gulp-if')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')

const Base = require('./base.js')

class Javascript extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    this.config = config

    gulp.task(`js`, () => this.javascript())
    const { jsWatchPath } = config
    const watchPath = jsWatchPath || `./src/assets/js/**/*`
    gulp.task(`watch-js`, () => {
      console.log('Watching JS at: ', watchPath);
      return gulp.watch(watchPath, gulp.series(`js`))
    })
  }

  javascript () {
    const { jsPath, jsDest } = this.config
    const path = jsPath || `src/assets/js/all.js`;
    const dest = jsDest || `assets/js`;

    this.log(`Building Javascript [Optimized=${this.release}]`)
    const b = browserify(path, {
      debug: !(this.release),
      targets: {
        browsers: [`last 2 versions`, `safari >= 7`]
      },
      transform: [`babelify-9`]
    })

    const { allJsFile } = this.config
    const allFile = allJsFile || 'all.js'

    return b.bundle()
      .pipe(source(allFile).on(`error`, this.log))
      .pipe(buffer().on(`error`, this.log))
      .pipe(gulpif(!(this.release), sourcemaps.init().on(`error`, this.log)))
      .pipe(gulpif(this.release, uglify().on(`error`, this.log)))
      .pipe(gulpif(!(this.release), sourcemaps.write().on(`error`, this.log)))
      .pipe(this.dest(dest).on(`error`, this.log))
  }
}

module.exports = Javascript

import Base from './base.js'

class Help extends Base {
  constructor (gulp, config) {
    super(gulp, config)
    this.gulp.task(`help`, callback => this.help(callback))

    this.colors = {
      end: `\x1b[0m`,
      title: `\x1b[0m \x1b[4m\x1b[35m`,
      dim: `\x1b[2m`,
      command: `\x1b[36m`,
      parameter: `\x1b[33m`
    }
  }

  help (callback) {
    this.log(`\r\n`)
    this.log(`${this.colors.dim}|============================[${this.colors.end + this.colors.title} Gulp Help${this.colors.end + this.colors.dim} ]============================|${this.colors.end}`)
    this.log(`\r\n`)
    this.log(` ${this.colors.command} browse         ${this.colors.end}Open the project in a browser`)
    this.log(` ${this.colors.command} build          ${this.colors.end}Start a standard build`)
    this.log(` ${this.colors.command} clean          ${this.colors.end}Delete the dist folder`)
    this.log(` ${this.colors.command} develop        ${this.colors.end}watch + browse`)
    this.log(` ${this.colors.command} help           ${this.colors.end}Instructions on how to use Build System (this output)`)
    this.log(` ${this.colors.command} images         ${this.colors.end}Copy the img folder from src to dist`)
    this.log(` ${this.colors.command} javascript     ${this.colors.end}Process .js files from src to dist`)
    this.log(` ${this.colors.command} kit            ${this.colors.end}Process .kit files from src to dist`)
    this.log(` ${this.colors.command} sass           ${this.colors.end}Process .scss files from src to dist`)
    this.log(` ${this.colors.command} watch          ${this.colors.end}Watch for changes in src files and then processes them`)
    this.log(`\r\n`)
    this.log(` ${this.colors.parameter}--lang${this.colors.end}        Language To Build (i.e. --lang en)`)
    this.log(` ${this.colors.parameter}--port${this.colors.end}        Port To Use (i.e. --port 8081)`)
    this.log(` ${this.colors.parameter}--release${this.colors.end}     Optimize Javascript (i.e --release true)`)
    this.log(`\r\n`)
    callback()
  }
}

export default Help

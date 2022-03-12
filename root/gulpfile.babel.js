import gulp from 'gulp'
import WebsiteBuilder from 'website-builder'

gulp.WebsiteBuilder = new WebsiteBuilder(gulp, {
  "baseUrl": "https://example.com",
  "distPath": "./dist",
  "scssDestPath": "assets",
  "jsDestPath": "assets",
  "fontDestPath": "assets",
  "imgDestPath": "assets",
  "cssOutputFile": "all.min.css",
  "jsOutputFile": "all.min.js",
  "scssSrcFilePath": "src/assets/scss/all.scss",
  "jsSrcFilePath": "src/assets/js/all.js",
  "imgSrcPath": "src/assets/images",
  "scssWatchPath": "./src/assets/scss/**/*",
  "jsWatchPath": "assets/js/**/*",
  "fontWatchPath": "src/assets/fonts/*",
  "imageWatchPath": "src/assets/images/*",
  "fontSrc": "src/assets/fonts"
})

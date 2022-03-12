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
  "scssSrcFilePath": "assets/scss/all.scss",
  "jsSrcFilePath": "assets/js/all.js",
  "imgSrcPath": "assets/images",
  "scssWatchPath": "./assets/scss/**/*",
  "jsWatchPath": "assets/js/**/*",
  "fontWatchPath": "assets/fonts/*",
  "imageWatchPath": "assets/images/*",
  "fontSrc": "assets/fonts"
})

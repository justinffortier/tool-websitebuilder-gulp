# Overview
A website builder for using gulp. Use this project to create highly performant and lightweight static websites. Or, just use the gulp compiler to create optimized JS and CSS for your Wordpress, Shopify, or Drupal website. Build your JS, SCSS, and static HTML files using the "hot reload" features that come with `gulp watch`. In addition, your images, fonts, videos, and documents will be all be optimized for web using gulp so that every aspect of your website is optimal.

# Before you get started
- Make sure you have `node` and `npm` installed. We prefer yarn, but you can use npm instead.

# Getting Started
- Initialize your project if not already done so.
```
yarn init
```
- Add the website builder 
```
yarn add website-builder-gulp
```
- Bring in the website builder boiler plate 
```
node node_modules/website-builder-gulp/init.js
```
- Install new dependencies added to your package json 
```
yarn install
```
- Start your project 
```
yarn start
```

# Notes
- After you get your project running be sure to find and replace all instances throughout the project of `CHANGE` to match the appropriate values for your website ex:
```
<title>CHANGE | <!-- $title --></title>
```
- Be sure to run `yarn build` when you are ready to deploy your site. This will optimize all of your javascript, images, and video so that they are compact and highly performant. In addition it creates a perfect sitemap and robots.txt file for your website. 

# Ways to Use This Project
## Boiler Plate
- Create a static website using Code Kit by running `gulp develop`. This will create static html pages for each .kit file you have in the pages folder. To create routes ie `/about`, simply create a folder for each page and place your kit file inside that folder. We suggest naming the .kit file the same 
- This package comes with a boiler plate bootstrap project complete with all the common head, nav, footer and wrapper html. Run `node /node_modules/website-builder-gulp/init.js` to initialize the boiler plate project.

## Asset Files only
- Using something other than kit files for your html? Using a CMS like wordpress, shopify, or Drupal but want the benefits of using SCSS and npm? Use our assets only options.
- Start by configuring the gulpfile.bable.js after initializing your boiler plate. In the config file be sure to set the path to your source files so that gulp can watch your changes. Configure your destination path so that your output goes to the right place for your SCSS. For example, we built a shopify them by placing the source files outside of the theme folder and had the builder point to the shopify theme folder as the destination and voila! you are using scss in your shopify theme once again.
- run `gulp develop-js-scss-fonts-images` to watch your folder for changes build out perfect pages.

## Other options
- `gulp develop-js-scss` only watches for js and scss
- `gulp develop-js-scss` only watches for js and scss
- `gulp develop-js-scss-fonts` only watches for js, scss, and fonts
- `gulp develop-js-scss-fonts` only watches for js, scss, and fonts
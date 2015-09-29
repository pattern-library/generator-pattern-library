var gulp = require('gulp');
var plu = require('pattern-library-utilities');

/**
 * Javascript documentation generator
 *
 * Uses DOXX to create documentation from javascript jsdoc blocks
 *
 * @requires ./lib/gulp-tasks/doxx.js
 */
// set up the doxx task options
var doxxOptions = {

  config: {
    title: 'Pattern Library Utilities',
    urlPrefix: '/pattern-library-utilities'
  },
  src: [
  '!./node_modules/**/*',
  '!./.publish/**/*',
  '!./test/**/*',
  '!./gulpfile.js',
  '!./local/**/*',
  '!./lib/**/*',
  '!./docs/**/*',
  './**/*.js',
  './README.md'],
  dest: './docs',
  dependencies: [] // gulp tasks which should be run before this task

};
// add the `gulp doxx` task to available gulp tasks
plu.gulpDoxx(gulp,doxxOptions);


/**
 * GitHub Pages deployment
 *
 * Uses ghPages task to deploy prototyper's public folder to gh-pages. Does a url-replace task before and after
 *
 * @requires ./lib/gulp-tasks/gh-pages.js
 */
// set up the gh-pages gulp task options
var ghPagesOptions = {
  src: ['./docs/**/*'],
  ghPagesPrefix: 'generator-pattern-library',
  dependencies: [] // run documentation generator before sending to GitHub Pages

};
// add the `gulp ghPages` task to available gulp tasks
plu.gulpGhPages(gulp,ghPagesOptions);

# Pattern Library Generator


## Requirements

* [Composer](https://getcomposer.org)
* [NodeJS](https://nodejs.org)
* [Yeoman](http://yeoman.io)
* [Gulp](http://gulpjs.com/)

## Pattern Library Generator

The Pattern Library Yeoman Generator is used to scaffold out a complete pattern library structure.

To install generator-pattern-library from npm, run:

```bash
npm install -g generator-pattern-library
```

Finally, initiate the generator:

```bash
yo pattern-library
```

### Build, install, and serve your new pattern library

Once the library has been scaffolded by Yeoman, you'll need to run these commands. NOTE: these instructions are in the README of your new pattern library

* Install Pattern Lab, then import ALL Pattern Libraries and local site files into Pattern Lab

  `gulp build`
  
* Populate Pattern Lab's public directory, run server, watch files
  
  `gulp serve`

## Pattern Subgenerator: Create a new pattern

This subgenerator will create a new pattern and it's supporting files inside the local patterns folder (`./patterns`)

```
yo pattern-library:pattern
```

## Where are my files? Where do I work?

**DO NOT EDIT FILES IN PATTERN-LAB (./patternlab).** 

All changes made in the patternlab directory will be overwritten by gulp.

### Patterns

`./patterns`

All html patterns in your pattern library will be located in `./patterns`. They should be in subfolders according to their category & subcategory.

Any changes to files in the `./patterns` directory will automatically be imported into your local Pattern Lab instance as long as you have run the `gulp serve` command and your server is running.

### Global Assets/Files

`./global-assets`

You may also have files that aren't directly associated with a single pattern. These could include site-wide css, fonts, images, etc. 

Any changes to files in the `./global-assets` directory will automatically be imported into your local Pattern Lab instance as long as you have run the `gulp serve` command and your server is running.

## Can I include one pattern in another?

as a twig include, yes.

 `{% include "[category]-[patternName]" %}` eg: `{% include 'molecules-circle' %}`

 ref: [how to twig includes](https://github.com/pattern-lab/patternengine-php-twig#pattern-includes)

## How to clone a pattern

...or... "Can I modify a pattern imported from the NPM-based pattern library (for example, the existing promo pattern)?"

Version 0.1.3 of [pattern-library-utilities](https://github.com/pattern-library/pattern-library-utilities) added a cloning feature. It's rudimentary, but it works.

**NOTE:** If the pattern folder already exists in your `./patterns` directory, the system will *not* overwrite your local folder. It will exit without cloning.

### To clone a pattern from NPM to your local ./patterns directory

You'll type three items:

* gulp task: `gulp clone`
* a flag: `--pattern`
* a pattern path: `node_modules/path/to/category/subcategory/pattern`

If you were going to import the [h1 atoms/text pattern](https://github.com/pattern-library/pattern-library/tree/master/patterns/atoms/text/h1) into your local pattern directory to make changes to it, your final gulp line would look like this:

`gulp clone --pattern node_modules/pattern-library/patterns/atoms/text/h1`

## How to import a new pattern library from a GitHub repo into your pattern library

**NOTE:**  turn off `gulp serve` before importing a new library

1. Use NPM to import the library

    * inside the main directory of your pattern library, run this command:

    ```
    npm install git+ssh://git@github.com:scottnath/scottnath-pattern-library.git
    ```
    * the above line imports the pattern library "scottnath-pattern-library" into your library's `node_modules` directory
    * change the git ssh link to whatever pattern library you're trying to import from github
    
2. Change your config.yml file to include this new pattern library.
    * inside `./config.yml`, near the top, you'll add this new library to `npmPatternRepos`:

    ```
    npmPatternRepos:
      -
        name: 'base'
        repoDir: 'pattern-library'
      -
        name: 'scottnath'
        repoDir: 'scottnath-pattern-library'
    ```
3. Run the import task for all libraries

  	```
  	gulp patterns-import-all
  	```
  	
  	* alternatively, you can import *just this one library* into Pattern Lab  	

  	```
  	gulp patterns-import-npm-scottnath
  	```
4. Start the server


    `gulp serve`

## License

MIT

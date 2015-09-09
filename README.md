# Pattern Library Generator


## Requirements

* [Composer](https://getcomposer.org)
* [NodeJS](https://nodejs.org)
* [Yeoman](http://yeoman.io)

```
npm install -g yo
```

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
* Run server, watch files
  `gulp serve`

## New-Pattern-Creation Subgenerator

This subgenerator will create a new pattern and it's supporting files inside the local patterns folder `./patterns`

```bash
yo pattern-library:pattern
```

## Where are my files? Where do I work?

**do not edit files in Pattern Lab (./patternlab). All changes made in that directory will be automatically overwritten by gulp.**

### Patterns

`./patterns`

All html patterns in your pattern library will be located in `./patterns`. They should be in subfolders according to their category.

Any changes to files in the `./patterns` directory will automatically be imported into your local Pattern Lab instance as long as you have run the `gulp serve` command and your server is running.

## Can I include one pattern in another?

as a twig include, yes.

 * [how to twig includes](http://twig.sensiolabs.org/doc/tags/include.html)
 * [example pattern with include](https://github.com/pattern-library/pattern-library/blob/master/patterns/molecules/media/figure-image/figure-image.twig)

## Can I modify an existing pattern?

Right now, you just need to create a pattern as noted above (with `yo`) and extract out what is needed from the file in the patternlab directory.

We will be adding this as a feature to the Yeoman generator


### Site Assets/Files

`./site-files`

You may also have files that aren't directly associated with a single pattern. These could include site-wide css, fonts, images, etc. 

Any changes to files in the `./site-files` directory will automatically be imported into your local Pattern Lab instance as long as you have run the `gulp serve` command and your server is running.

## License

MIT

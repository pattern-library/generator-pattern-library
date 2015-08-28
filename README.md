# generator-pattern-library [![Build Status](https://secure.travis-ci.org/pattern-library/generator-pattern-library.png?branch=master)](https://travis-ci.org/pattern-library/generator-pattern-library)


## Requirements

* [Composer](https://getcomposer.org)
* [NodeJS](https://nodejs.org)
* [Yeoman](http://yeoman.io)
    ```bash
    npm install -g yo
    ```

### Pattern Library Generator

The Pattern Library Yeoman Generator is used to scaffold out a complete pattern library structure.

To install generator-pattern-library from npm, run:

```bash
npm install -g generator-pattern-library
```

Finally, initiate the generator:

```bash
yo pattern-library
```

#### Build, install, and serve your new pattern library

Once the library has been scaffolded by Yeoman, you'll need to run these commands. NOTE: these instructions are in the README of your new pattern library

* Install Pattern Lab, then import ALL Pattern Libraries and local site files into Pattern Lab
  `gulp build`
* Run server, watch files
  `gulp serve`

### Pattern Subgenerator

This subgenerator will create a new pattern and it's supporting files inside the local patterns folder `./patterns`

```bash
yo pattern-library:pattern
```

## License

MIT

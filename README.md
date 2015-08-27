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
yo pattern library
```

### Pattern Subgenerator

This subgenerator will create a new pattern and it's supporting files inside the local patterns folder `./patterns`

```bash
yo pattern library:pattern
```

## License

MIT

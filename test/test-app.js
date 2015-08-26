'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

var libraryname = 'Foo Bar';
var reponame = 'foobar-pattern-library';

describe('pattern library:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ libraryname: libraryname })
      .withPrompts({ reponame: reponame })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'lib/templates/foot.twig',
      'lib/templates/head.twig',
      'lib/templates/style.scss',
      'patterns/.gitkeep',
      'site-files/css/.gitkeep',
      'site-files/css/scss/.gitkeep',
      'site-files/fonts/.gitkeep',
      'site-files/images/.gitkeep',
      'site-files/js/.gitkeep',
      '.editorconfig',
      '.gitignore',
      'config.yml',
      'gulpfile.js',
      'package.json',
      'README.md'
    ]);
  });

  it('adds a repo name to files', function () {
    assert.fileContent('config.yml',
      new RegExp('githubrepo: ' + reponame)
    );
    assert.fileContent('package.json',
      new RegExp('"name": "' + reponame + '",')
    );
  });

  it('adds a library name to files', function () {
    assert.fileContent('README.md',
      new RegExp('# ' + libraryname + ' Pattern Library')
    );
  });
});

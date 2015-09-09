'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

var patternOne = {
  name: 'Test',
  category: 'atoms',
  subcategory: 'subcat1',
  type: 'twig',
  filesToInclude: []
}

var patternTwo = {
  name: 'Test Two %$#()---Go',
  category: 'atoms',
  subcategory: 'subCategoryTest',
  type: 'html',
  filesToInclude: [
  'javascript',
  'sass']
}
describe('PatternLibrary:generators/pattern', function () {

  describe('creates a pattern without js or scss', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/pattern'))
        .withPrompts({ patternName: patternOne.name })
        .withPrompts({ category: patternOne.category })
        .withPrompts({ subcategory: patternOne.subcategory })
        .withPrompts({ patternType: patternOne.type })
        .withPrompts({ filesToInclude: patternOne.filesToInclude })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'patterns/atoms/subcat-1/test/test.twig',
        'patterns/atoms/subcat-1/test/pattern.yml',
        'patterns/atoms/subcat-1/test/README.md'
      ]);
    });
  });

  describe('creates a pattern with html, js, and scss', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/pattern'))
        .withPrompts({ patternName: patternTwo.name })
        .withPrompts({ category: patternTwo.category })
        .withPrompts({ subcategory: patternTwo.subcategory })
        .withPrompts({ patternType: patternTwo.type })
        .withPrompts({ filesToInclude: patternTwo.filesToInclude })
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        'patterns/atoms/sub-category-test/test-two-go/test-two-go.js',
        'patterns/atoms/sub-category-test/test-two-go/test-two-go.scss',
        'patterns/atoms/sub-category-test/test-two-go/test-two-go.html',
        'patterns/atoms/sub-category-test/test-two-go/pattern.yml',
        'patterns/atoms/sub-category-test/test-two-go/README.md'
      ]);
    });
  });

});

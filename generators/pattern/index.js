'use strict';
var yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  _ = require('lodash'),
  through2 = require('through2'),
  utils = require('../../lib/utils');

module.exports = yeoman.generators.Base.extend({
  prompting: {

    name: function () {
      var done = this.async();

      var prompts = [{
        type: 'input',
        name: 'patternName',
        message: 'What is the name of this Pattern?',
        validate: function( answer ) {
          if ( answer.length < 1 ) {
            return "You must name your new pattern.";
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'category',
        message: 'In what category does this pattern belong?',
        choices: [
          {
            name: 'Atoms',
            value: 'atoms'
          },
          {
            name: 'Molecules',
            value: 'molecules'
          },
          {
            name: 'Organisms',
            value: 'organisms'
          },
          {
            name: 'Templates',
            value: 'templates'
          },
          {
            name: 'Pages',
            value: 'pages'
          }
        ],
        default: 'organisms'
      },
      {
        type: 'input',
        name: 'subcategory',
        message: 'In what subcategory does this pattern belong?',
        validate: function( answer ) {
          if ( answer.length < 1 ) {
            return "You must provide a subcategory.";
          }
          return true;
        }
      }];

      this.prompt(prompts, function (props) {
        this.props = props;
        // Create camel/kebab version of pattern name
        this.props.patternNameCamel = _.camelCase(this.props.patternName);
        this.props.patternNameKebab = _.kebabCase(this.props.patternName);
        // Create camel/kebab version of subcategory
        this.props.subcategoryCamel = _.camelCase(this.props.subcategory);
        this.props.subcategoryKebab = _.kebabCase(this.props.subcategory);

        done();
      }.bind(this));
    },

    files: function () {
      var done = this.async();

      var prompts = [{
        type: 'list',
        name: 'patternType',
        message: 'What type of pattern is this?',
        choices: [
          {
            name: 'TWIG',
            value: 'twig'
          },
          {
            name: 'HTML',
            value: 'html'
          }
        ],
        default: 'twig'
      },
      {
        type: 'checkbox',
        name: 'filesToInclude',
        message: 'Which supporting files should be included? (select with spacebar)',
        choices: [
          {
            name: this.props.patternNameKebab+'.js',
            value: 'javascript'
          },
          {
            name: this.props.patternNameKebab+'.scss',
            value: 'sass'
          }
        ]
      }];

      this.prompt(prompts, function (fileprops) {
        this.props = _.merge(this.props,fileprops, function (a, b) {
          return Array.isArray(a) ? b : undefined;
        });

        done();
      }.bind(this));
    }
  },

  writing: function () {

    // get the pattern's path with category and subcategory
    var patternPath = utils.getPatternPath(this.props);
    // add the name of a typical pattern file
    var patternFile = patternPath+'/'+this.props.patternNameKebab;

    // if patternType is twig, add the twig template
    if(this.props.patternType === 'twig'){
      this.fs.copyTpl(
        this.templatePath('pattern/_pattern.twig'),
        this.destinationPath('./patterns/' + patternFile + '.twig'),
        this.props
      );
    }

    // if patternType is html, add the twig template
    if(this.props.patternType === 'html'){
      this.fs.copyTpl(
        this.templatePath('pattern/_pattern.html'),
        this.destinationPath('./patterns/' + patternFile + '.html'),
        this.props
      );
    }

    // check if a javascript file should be included
    if(this.props.filesToInclude.indexOf('javascript') !== -1){
      this.fs.copyTpl(
        this.templatePath('pattern/_pattern.js'),
        this.destinationPath('./patterns/' + patternFile + '.js'),
        this.props
      );
    }

    // check if a sass file should be included
    if(this.props.filesToInclude.indexOf('sass') !== -1){
      this.fs.copyTpl(
        this.templatePath('pattern/_pattern.scss'),
        this.destinationPath('./patterns/' + patternFile + '.scss'),
        this.props
      );
    }

    // add the README
    this.fs.copyTpl(
      this.templatePath('pattern/_README.md'),
      this.destinationPath('./patterns/' + patternPath + '/README.md'),
      this.props
    );

    // add the pattern YAML data file
    this.fs.copyTpl(
      this.templatePath('pattern/_pattern.yml'),
      this.destinationPath('./patterns/' + patternPath + '/pattern.yml'),
      this.props
    );

    // pre-file-writing file transformations
    this.registerTransformStream(
      through2.obj(function(file, enc, cb) {

        // remove blank lines from pattern.yml
        if(file.path.indexOf('pattern.yml') !== -1){
          file.contents = new Buffer(String(file.contents).replace(/^\s*$[\n\r]{1,}/gm, ''));
        }

        this.push(file);
        cb();
      })
    );

  }
});

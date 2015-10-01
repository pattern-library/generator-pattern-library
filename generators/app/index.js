'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: {

    name: function () {
      var done = this.async();

      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the funkadelic ' + chalk.red('PatternLibrary') + ' generator!'
      ));

      var prompts = [{
        type: 'input',
        name: 'libraryname',
        message: 'What is the name of this Project?',
        default : this.appname
      }];

      this.prompt(prompts, function (props) {
        this.props = props;
        // To access props later use this.props.someOption;
        this.props.librarynameCamel = _.camelCase(this.props.libraryname)

        done();
      }.bind(this));
    },

    repo: function () {
      var done = this.async();

      var prompts = [{
        type: 'input',
        name: 'reponame',
        message: 'What is the name of the GitHub repository?',
        default : this.props.librarynameCamel+'-pattern-library'
      }];

      this.prompt(prompts, function (repoprops) {
        this.props = _.merge(this.props,repoprops, function (a, b) {
          return Array.isArray(a) ? b : undefined;
        });

        done();
      }.bind(this));
    }
  },

  writing: {

    copyFiles: function () {

      // gulpfile
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );

      // repository files
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      // git files
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );


      // prototyper build files
      this.fs.copy(
        this.templatePath('lib/templates/_foot.twig'),
        this.destinationPath('lib/templates/foot.twig')
      );
      this.fs.copy(
        this.templatePath('lib/templates/_head.twig'),
        this.destinationPath('lib/templates/head.twig')
      );

      // local pattern library directory
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('patterns/.gitkeep')
      );

      // global assets directories
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/styles/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/styles/css/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/styles/scss/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('global-assets/styles/scss/_style.scss'),
        this.destinationPath('global-assets/styles/scss/style.scss')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/fonts/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/images/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('gitkeep'),
        this.destinationPath('global-assets/js/.gitkeep')
      );
    },
    transformFiles: function () {

      // configuration
      this.fs.copyTpl(
        this.templatePath('_config.yml'),
        this.destinationPath('config.yml'),
        this.props
      );

      // repository files
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        this.props
      );
    }
  },

  install: function () {
    // install NPM dependencies
    this.npmInstall();
  }
});

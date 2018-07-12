var chalk      = require('chalk');
var _camelCase = require('lodash.camelcase');
var _kebabCase = require('lodash.kebabcase');
var Generator  = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    // define options
    this.option('dumb');
    this.option('camel');
    this.option('version');
    // define help text
    this.desc('\t' + chalk.yellow('React component:')
      + '\n\t\t' + chalk.green('yo react-tools')
      + '\n\n\t' + chalk.yellow('React Native component:')
      + '\n\t\t' + chalk.green('yo react-tools:native'));
    this._options.dumb.description = 'Creates a component with no state';
    this._options.camel.description = 'CamelCases the component name instead of kebab-case';
    this._options.version.description = 'Displays the current version number';

    this.log('');
    this.log(chalk.cyan('Welcome to React Tools component generator!!'));
    this.log('');
  }

  prompting() {
    var self = this;

    this.log(chalk.gray('Let\'s get started...'));
    this.log('');

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component\'s name?',
        default: 'Sample Component'
      }
    ];
    return this.prompt(prompts).then(function (answers) {

      self.componentName = _kebabCase(answers.componentName);

      if (self.options.camel) {
        var camelCased = _camelCase(answers.componentName);
        self.componentName = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
      }
      self.log('');
      self.log(chalk.gray('Creating component: ') + chalk.green(self.componentName) + chalk.gray('...'));
      self.log('');
    });
  }

  // writing: function() {
  //   this.composeWith('zooid:component', {
  //     args: [this.zooidName]
  //   },
  //   {
  //     local: require.resolve('../component')
  //   });
  //   var context = {
  //     zooidName: this.zooidName,
  //     zooidNameKebab: this.zooidNameKebab,
  //     author: this.author,
  //     githubUrl: this.githubUrl,
  //     githubUser: this.githubUser
  //   }
  //   this.template('src/_index.js', 'src/index.js', context);
  //   this.template('test/_setup.js', 'test/.setup.js', context);
  //   this.template('test/_mocha.opts', 'test/mocha.opts', context);
  //   this.template('_README.md', 'README.md', context);
  //   this.template('_package.json', 'package.json', context);
  //   this.template('_babelrc', '.babelrc', context);
  //   this.template('_webpack.config.js', 'webpack.config.js', context);
  //   this.template('_gitignore', '.gitignore', context);
  //   this.template('.storybook/_config.js', '.storybook/config.js', context);
  //   this.template('.storybook/_webpack.config.js', '.storybook/webpack.config.js', context);
  //   this.template('stories/_index.js', 'stories/index.js', context);
  //   this.template('scripts/_publish-storybook.sh', 'scripts/publish-storybook.sh', context);
  //   this.template('_stylelintrc', '.stylelintrc', context);
  //   this.template('_eslintrc', '.eslintrc', context);
  //   this.template('_eslintignore', '.eslintignore', context);
  //   this.template('_codeclimate.yml', '.codeclimate.yml', context);
  //   this.template('_travis.yml', '.travis.yml', context);
  // }
};

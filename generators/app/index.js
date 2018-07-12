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
    // define help text
    this.desc('\t' + chalk.yellow('React component:')
      + '\n\t\t' + chalk.green('yo react-tools')
      + '\n\n\t' + chalk.yellow('React Native component:')
      + '\n\t\t' + chalk.green('yo react-tools:native'));
    this._options.dumb.description = 'Creates a component with no state';
    this._options.camel.description = 'CamelCases the component name instead of kebab-case';

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

  // writing() {
  //   this.composeWith('zooid:component', {
  //     args: [this.zooidName]
  //   },
  //   {
  //     local: require.resolve('../component')
  //   });
  //   var context = {
  //     zooidName: this.zooidName,
  //   }
  //   this.template('src/_index.js', 'src/index.js', context);
  // }
};

var chalk      = require('chalk');
var _camelCase = require('lodash.camelcase');
var _kebabCase = require('lodash.kebabcase');
var Generator  = require('yeoman-generator');

function template(input, output, context) {
  this.fs.copyTpl(
    this.templatePath(input),
    this.destinationPath(output),
    context
  );
}

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    template = template.bind(this);
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

    this.log(chalk.gray('Let\'s get started with your new ' + chalk.yellow('React Native component') + '...'));
    this.log('');

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your native component\'s name?',
        default: 'Sample Component'
      }
    ];
    return this.prompt(prompts).then(function (answers) {
      self.componentName = _kebabCase(answers.componentName);
      var camelCased = _camelCase(answers.componentName);
      self.componentNameCamel = camelCased.charAt(0).toUpperCase() + camelCased.slice(1);

      if (self.options.camel) {
        self.componentName = self.componentNameCamel;
      }
    });
  }

  writing() {
    this.log('');
    this.log(chalk.gray('Creating ') + chalk.yellow(this.options.dumb ? 'Dumb' : 'Smart') + chalk.gray(' native component: ') + chalk.green(this.componentName) + chalk.gray('...'));
    this.log('');

    var context = {
      componentName: this.componentName,
      componentNameCamel: this.componentNameCamel
    };

    if (this.options.dumb) {
      template('_index-dumb.js', this.componentName + '/' + this.componentName + '.js', context);
    } else {
      template('_index.js', this.componentName + '/' + this.componentName + '.js', context);
    }
    template('_index.test.js', this.componentName + '/' + this.componentName + '.test.js', context);
    template('_package.json', this.componentName + '/package.json', context);
  }
};

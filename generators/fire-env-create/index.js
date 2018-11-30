const Base = require('yeoman-generator');

module.exports = class FireEnvGenerator extends Base {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    console.log('Hey');
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message:
          'Please confirm the react-native project name (as in react-native-init <PROJECT_NAME>)',
      },
    ]);
  }

  install() {}

  writting() {}

  end() {}
};

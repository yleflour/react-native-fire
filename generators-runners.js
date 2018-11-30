const path = require('path');
const yeoman = require('yeoman-environment');
const Adapter = require('yeoman-environment/lib/adapter');

const env = yeoman.createEnv(null, null, new Adapter());

const runnerFactory = generatorName => {
  const generatorPath = path.resolve(__dirname, `./generators/${generatorName}`);
  env.register(generatorPath, generatorName);

  return () =>
    new Promise((resolve, reject) => {
      env.run(generatorName, () => {
        resolve();
      });
    });
};

module.exports = {
  fireEnvSetup: runnerFactory('fire-env-setup'),
  fireEnvCreate: runnerFactory('fire-env-create'),
};

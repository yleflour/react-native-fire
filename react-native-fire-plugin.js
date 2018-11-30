const { fireEnvCreate } = require('./generators-runners');

module.exports = [
  {
    name: 'fire:env:create',
    description: 'Create a new environment',
    func: fireEnvCreate,
  },
];

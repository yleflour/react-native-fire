#!/usr/bin/env node

const program = require('commander');

const runners = require('./generators-runners');
const package = require('./package.json');

program.version(package.version).description('React-Native on 🔥');

program
  .command('env:setup')
  .action(runners.fireEnvSetup)
  .description('Setup app environments');

program
  .command('env:create')
  .action(runners.fireEnvCreate)
  .description('Create a new app environment');

if (!process.argv.slice(2).length) program.outputHelp();

program.parse(process.argv);

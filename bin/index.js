#!/usr/bin/env node
const program = require('commander');

const arrayFunc = require("../lib/arrayManipulation");
const test = require("../lib/testing");

// Examples and testing --------------------------
program
  .command('test') // sub-command name
  .alias('tst') // alternative sub-command
  .description('Test command/example which takes an input and then displays it') // command description
  // function to execute when this command is uses
  .action(function () {
    test.testInput(); 
  });
program
  .command('testArr') 
  .alias('tstarr') 
  .description('Test command/example which takes an input, splits it into an array then displays it') 
  .action(function () {
    test.testSplitArr(); 
  });
// End Examples ---------------------------

program
  .command('splitArrWithPrefix')
  .alias('ssp') 
  .description('Takes a long string of SKUs, splits them into lines on N-length with an optional prefix (good for adding CLI commands).') // command description
  .action(function () {
    arrayFunc.splitArrWithPrefix();
  });

// console.log(process.argv);
program.parse(process.argv);



// any changes should be installed globally using 'sudo npm install -g ./' in the sku-scripts dir
//
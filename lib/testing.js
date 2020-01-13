const inquirer = require('inquirer');
const shared = require('./shared');

var testQuestions = [
    {
        type: 'input',
        name: 'testInput',
        message: 'This is just an example of a text input/question. Type Anything'
      }
];
exports.testInput = () => {
    shared.displaySnazzyTitle();
    inquirer
        .prompt(testQuestions) // asks for input
        .then(function(answers) { // then does what with the answers?
            console.log(answers.testInput);
        })
}

var testQuestionsForArraySplit = [
    {
        type: 'input',
        name: 'testInputArrSplit',
        message: 'Enter a string to be split'
      }
];
exports.testSplitArr = () => {
    inquirer
        .prompt(testQuestionsForArraySplit) // asks for input
        .then(function(answers) { // then does what with the answers?
            var splitArr = answers.testInputArrSplit.split(" ");
            console.log(splitArr);
        })
}

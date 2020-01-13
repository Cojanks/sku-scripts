const inquirer = require('inquirer');
const clear = require('clear');

var arraySplitWithPrefixQuestions = [
    {
        type: 'input',
        name: 'strToSplit',
        message: 'Enter a string to be split'
    },
    {
        type: 'number',
        name: 'numToSplitInto',
        message: 'N length per line? (leave blank and defaults to 10)',
        default: 10
    },
    {
        type: 'string',
        name: 'prefixStr',
        message: 'Add prefix to each line (leave blank and defaults to nothing):',
        default: ' '
    }
];
exports.splitArrWithPrefix = () => {
    clear();

    inquirer
        .prompt(arraySplitWithPrefixQuestions) // asks for input
        .then(function(answers) { // then does what with the answers?
            let strArr = answers.strToSplit.split(' ');
            for(var i = 0; i < strArr.length; i += answers.numToSplitInto) {
                if (answers.prefixStr !== ' ') {
                    console.log(answers.prefixStr + " " + strArr.slice(i, i+answers.numToSplitInto).join(' '));
                } else {
                    console.log(strArr.slice(i, i+answers.numToSplitInto).join(' '));
                }
            }
        })

    // Example:
    // sku ssp
    // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 23 24 25 26 34 35 36 37 38
    // 4
    // medi add -p 
    //
    //
    // Output:
    // medi add -p 1 2 3 4
    // medi add -p 5 6 7 8
    // medi add -p 9 10 11 12
    // medi add -p 13 14 15 16
    // medi add -p 17 23 24 25
    // medi add -p 26 34 35 36
    // medi add -p 37 38
    //
    //git
    // copy from console and profit?
}
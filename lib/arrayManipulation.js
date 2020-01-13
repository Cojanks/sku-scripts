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
    // DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH
    // 12
    // derp add -p 
    //
    //
    // Output:
    // derp add -p  DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE
    // derp add -p  DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD
    // derp add -p  DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB
    // derp add -p  DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS
    // derp add -p  DERP98346 DERP02346D DERP8345GG DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE
    // derp add -p  DERP666FF DERP777GG DERP888HH DERP3456CS DERP4356E DERP34FGD DERP994GT DERP95FDFG DERP235DGS DERP98346 DERP02346D DERP8345GG
    // derp add -p  DERP34SDG DERP003D DERP345EE DERP01SPD DERP111AA DERP222BB DERP333CC DERP444DD DERP555EE DERP666FF DERP777GG DERP888HH
    //
    //git
    // copy from console and profit?
}
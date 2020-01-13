const chalk = require('chalk');
const figlet = require('figlet');

exports.displaySnazzyTitle = () => {
    console.log(
        chalk.cyanBright.bold(
            figlet.textSync('SKU-foo', { 
                font: 'Ogre',
                horizontalLayout: 'fitted'
                })
        )
    );
}
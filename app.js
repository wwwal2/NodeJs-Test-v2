const helpFromNPM = require('yargs');
const helpFromHdd = require('./notes.js');

console.log(helpFromHdd);



const parsedYargs = helpFromNPM.argv;
console.log('Yargs: ', parsedYargs);

var userInput = parsedYargs._[0];
console.log('User input:', userInput);

if (userInput === 'add') {
    console.log('Note added');
} else if (userInput === 'remove') {
    console.log('Note removed');
} else if (userInput === 'getNote') {
    console.log('Note: ');
} else if (userInput === 'getAll') {
    console.log('Getting all notes: ');
} else {
    console.log('No known command used');
};


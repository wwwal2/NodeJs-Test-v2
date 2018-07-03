const helpFromNPM = require('yargs');
const helpFromHdd = require('./notes.js');

console.log(helpFromHdd);



const parsedYargs = helpFromNPM.argv;
console.log('Yargs: ', parsedYargs);

let userInput = parsedYargs._[0];
console.log('User input:', userInput);

if (userInput === 'add') {
    let respondedA = helpFromHdd.addNote(parsedYargs.title, parsedYargs.body);
    let answerA = respondedA ? `Note added: ${parsedYargs.title}` : 'Nothing added';
    console.log(answerA);

} else if (userInput === 'remove') {
    let respondedR = helpFromHdd.removeNote(parsedYargs.title);
    let answerR = respondedR ? `Note ${parsedYargs.title} removed` : `Note ${parsedYargs.title} not found`;
    console.log(answerR);

} else if (userInput === 'getNote') {
    let respondG = helpFromHdd.getNote(parsedYargs.title);
    let answerG = respondG ? `Note: ${respondG.title} ${respondG.body}` : `Note ${parsedYargs.title} not found`;
    console.log(answerG);

} else if (userInput === 'getAll') {
    let respondGA = helpFromHdd.getAll();
    respondGA.forEach(function (item, i, arr) {console.log(i, item.title, item.body);});

} else {
    console.log('No known command used');
};


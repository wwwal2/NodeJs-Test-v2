const helpFromSpaceLocal = require('fs');

console.log('notes.js attached');

var addNote = (title, body) => {
    console.log('Note added: ', title);

    var notesArray = [];
    var oneNote = {
        title,
        body
    };


    try {
        var enlargeNoteList = helpFromSpaceLocal.readFileSync('./data_stash/data.json');
        notesArray = JSON.parse(enlargeNoteList);
    } catch(err) {
    }

    var filterDuplicateNotes = notesArray.filter((duplicates) => {return duplicates.title === title;});

    if (filterDuplicateNotes.length === 0) {
        notesArray.push(oneNote);
        helpFromSpaceLocal.writeFileSync('./data_stash/data.json', JSON.stringify(notesArray));
    }
};

module.exports = {
    addNote,
};
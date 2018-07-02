const helpFromSpaceLocal = require('fs');

console.log('notes.js attached');

var saveToData = (insertObject) => {
    helpFromSpaceLocal.writeFileSync('./data_stash/data.json', JSON.stringify(insertObject));
};

var duplicateCheck = () => {

    try {
        var enlargeNoteList = helpFromSpaceLocal.readFileSync('./data_stash/data.json');
        return JSON.parse(enlargeNoteList);
    } catch (e) {
        return []
    }
};

var addNote = (title, body) => {

    var notesArray = duplicateCheck();
    var oneNote = {
        title,
        body
    };

    var filterDuplicateNotes = notesArray.filter((duplicates) => {return duplicates.title === title;});

    if (filterDuplicateNotes.length === 0) {
        notesArray.push(oneNote);
        saveToData(notesArray);
        return oneNote;  // made to see the actual note in variable 'responded' in app js
    }
};

module.exports = {
    addNote,
};
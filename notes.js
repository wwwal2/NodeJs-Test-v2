const helpFromSpaceLocal = require('fs');

console.log('notes.js attached');

let saveToData = (insertObject) => {
    helpFromSpaceLocal.writeFileSync('./data_stash/data.json', JSON.stringify(insertObject));
};

let duplicateCheck = () => {

    try {
        let enlargeNoteList = helpFromSpaceLocal.readFileSync('./data_stash/data.json');
        return JSON.parse(enlargeNoteList);
    } catch (e) {
        return []
    }
};

let addNote = (title, body) => {

    let notesArray = duplicateCheck();
    let oneNote = {
        title,
        body
    };

    let filterDuplicateNotes = notesArray.filter((duplicates) => {return duplicates.title === title });

    if (filterDuplicateNotes.length === 0) {
        notesArray.push(oneNote);
        saveToData(notesArray);
        return oneNote;  // made to see the actual note in variable 'responded' in app js
    }
};

let removeNote = (title) => {
    let getListR = duplicateCheck();
    let newListWithoutSelected = getListR.filter((duplicates) => {return duplicates.title !== title });
    saveToData(newListWithoutSelected);

    return getListR.length !== newListWithoutSelected
};

let getNote = (title) => {
    let getListG = duplicateCheck();
    let selectedElement = getListG.filter((duplicates) => {return duplicates.title === title });
    return selectedElement[0];
};

let getAll = () => {
    let allNotes = duplicateCheck();
    return allNotes;
};

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
};
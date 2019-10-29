const fs = require('fs');

function getNotes(){
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes()

    notes.push({
        tite: title,
        body: body
    });
    saveNotes(notes)
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};
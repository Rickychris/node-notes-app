const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const message = "Your notes ...";
    console.log(validator.isEmail('a@s.com'))

    return message
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed!"))
        // console.log("Note removed!")
    } else {
        // console.log("No note found!")
        console.log(chalk.red.inverse("No note found!"))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const dataBuff = fs.readFileSync('notes.json')
        const data = JSON.parse(dataBuff.toString());
        return data
    } catch (e) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
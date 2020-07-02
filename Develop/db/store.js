// Variables 
const util = require("util");
const fs = require("fs");
var { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Store note 
class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    //  new note 
    getNotes() {
        return this.read()
        .then(notes => {
            let parseNotes;
            try {
                parseNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parseNotes = [];
            }
            return parseNotes;
        })
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Note is Empty, can not be stored");
        }
        //variable to hold an object for the notes 
        const addNote = { title, text, id: uuidv4() }
        // adding New Note to array of current notes
        return this.getNotes()
            .then(notes => [...notes, addNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => addNote);
    }
    // Function to remove note 
    removeNote(id) {
        return this.getNotes()
            .then((remove) => remove.filter(removedNote => removedNote.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Store();
const util = require('util');
const fs = require('fs');

//generate unique id's
const uuidv1 = require('uuid/v1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
    return readFileAsync('db/db.json', JSON.stringify(note));
  }

  write(note) {
    return writeFileAsync('db/db.json',JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      //if notes isn't arrayed , send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  } 

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");  
    }

   //Add a unique id to the note using uuid package
   const newNote = {title,text, id: uuidv1() };
   
   //Get all notes,remove the note with the given id, write the filtered note
   return this.getNotes()
     .then((notes) => notes.filter((note) => note.id !==id))
     .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Notes();
// console.log('Starting notes.js');

// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = function () {
//
// }
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New Note';
// }
//
// module.exports.add = (a,b) => {
//   return a+b;
// }

const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
    } catch (e) {
      return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  // console.log('Adding note',title,body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
}
};

var getAll = () => {
  // console.log('geting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  // console.log('Getting Note',title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}

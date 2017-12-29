// console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes  = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Divyansh'));

// var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4]);
// console.log(filteredArray);

// console.log('Result: ', notes.add(2,6));

// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt','Hello '+user.username+'!');
// fs.appendFileSync('greetings.txt',`Hello ${user.username} You are ${notes.age}.!`);
const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: ',command);
// console.log('Process: ',process.argv);
// console.log('Yargs',argv);
if(command === 'add') {
  // console.log('Adding new node');
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note Created');
  notes.logNote(note);
}else {
    console.log('Note title taken');
  }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }else {
    console.log('Note not found');
  }
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('Command not recognized');
}

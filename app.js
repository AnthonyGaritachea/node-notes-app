const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');
// custom yargs version
yargs.version('1.1.0')

// creates 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => console.log('Adding a new note!')
});

// creates remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => console.log('Removing the note')
}); 

// creates list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: () => console.log('listing out all notes')
});

// creates read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => console.log('Reading the notes')
})

console.log(yargs.argv)
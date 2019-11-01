const yargs = require('yargs');

const notes = require('./notes.js');

// custom yargs version
yargs.version('1.1.0')

// creates 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: argv => notes.addNote(argv.title, argv.body)
                     
});

// creates remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.removeNote(argv.title)
}); 

// creates list command
yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: () => notes.listNotes()
});

yargs.parse() // parses arguements provided
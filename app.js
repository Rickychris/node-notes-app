const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const notes = require('./notes.js')

// Create add command
yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.addNote(argv.title, argv.body);
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log('Removing a note : ', argv.title);
            notes.removeNote(argv.title);
        }
    })
    .command({
        command: 'list',
        describe: 'List all notes',
        handler: (argv) => {
            console.log('Listing all notes');
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: (argv) => {
            console.log('Reading a note');
        }
    })
    .parse()
    
// Create a remove command
// yargs(hideBin(process.argv))
//     .command({
//         command: 'remove',
//         describe: 'Remove a note',
//         handler: (argv) => {
//             console.log('Removing a note');
//         }
//     })
//     .parse()
// // const getNotes = require('./notes');
// import { getNotes } from './notes.js';
// import chalk from 'chalk'; 
// import yargs from 'yargs/yargs';
// import { hideBin } from 'yargs/helpers'

// const yrgs = yargs(process.argv);
// yrgs.version('1.1.0').alias('v', 'version');

// console.log(yrgs.argv);  

// yrgs.command('add', 'Add a new note', (yargs) => {
//     console.log('Adding a new note');
// })
// yargs(hideBin(process.argv))
//   .command('serve [port]', 'start the server', (yargs) => {
//     return yargs
//       .positional('port', {
//         describe: 'port to bind on',
//         default: 5000
//       })
//   }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//     serve(argv.port)
//   })
//   .option('verbose', {
//     alias: 'v',
//     type: 'boolean',
//     description: 'Run with verbose logging'
//   })
//   .parse()

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note');
// } else if (command === 'remove') {
//     console.log('Removing note');
// }


// // const fs = require('fs');
// // const readline = require('node:readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// // rl.question(`Enter any text:\n`, text => {
// //     fs.appendFileSync('notes.txt', '\n' + text);
// //     console.log("Text appended to file successfully");
// //     rl.close();
// //   });
// // fs.writeFileSync('notes.txt', 'Hello World!');
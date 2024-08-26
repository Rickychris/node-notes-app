// const getNotes = require('./notes');
import { getNotes } from './notes.js';
import chalk from 'chalk'; 

console.log(getNotes());
console.log(chalk.green.inverse.bold("Success!"));
console.log(chalk.red.inverse.bold("Error!"));


// const fs = require('fs');
// const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`Enter any text:\n`, text => {
//     fs.appendFileSync('notes.txt', '\n' + text);
//     console.log("Text appended to file successfully");
//     rl.close();
//   });
// fs.writeFileSync('notes.txt', 'Hello World!');
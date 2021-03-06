// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCount (filename) {
    let file:string = '';
    try {
        file = fs.readFileSync(filename, 'utf8');
    }
    catch {
        console.log('');
    }
    let lines:string [] = file.split('\n');
    return lines.length;
}
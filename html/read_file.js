const fs = require('fs');

const people = fs.readFileSync('./db.json');
console.log(people.toString());
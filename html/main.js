// function sum(a, b) {
//     return (a * b)
// }
// console.log(sum(55, 55))

const fs = require('fs');
const people = [{
    id: 1,
    name: "ningrui"
}, {
    id: 2,
    name: "lkkkk"
}]
fs.writeFileSync('./db.json', JSON.stringify(people))
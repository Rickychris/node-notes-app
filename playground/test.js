const fs = require('fs');

const dataBuff = fs.readFileSync('test-data.json')
const data = JSON.parse(dataBuff.toString());
data.name = "Chris";
data.age = 27
fs.writeFileSync('test-data.json', JSON.stringify(data));
console.log(data);

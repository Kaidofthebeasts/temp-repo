const {readFileSync,writeFileSync} = require('fs');
console.log("start");
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/result-sync.txt',`hello world`,{flag:'a'});

console.log('dont with this task');
console.log('starting the next one');


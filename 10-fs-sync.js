//destruture the methods on fs module
//(NOT SURE) importing the whole fs module will return an object
//with the function name as the key, and the function as
//the value
const { readFileSync, writeFileSync } = require('fs') 

// readfilesync expects:
// 1. the file location to read, relative to this file,
// 2. the encoding (utf8 is the standard) without this, the console will print
//<Buffer .....

//it will return the string of all the text in the file
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first+ "\n" + second)

// readfilesync expects:
// 1. the file location to write, relative to this file,
// 2. the content to write
// 3. a flag that will idenfity if the content is to be appended or overwritten
//NOTE: by default, without the 3rd parameter, the content of the file will be
// overwritten 
writeFileSync('./content/result-sync.txt', 
    `Here is the result: ${first + second}`, 
    {flag:'a'})

console.log('done with this task')
console.log('starting the next one')

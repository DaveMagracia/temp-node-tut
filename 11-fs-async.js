
const { readFile, writeFile } = require('fs') 
console.log("start")
//these methods are async
//that is why the methods are nested. after the callbacks for every method,
//another readFile is ran to read the next file after the first file is finished
readFile('./content/first.txt', 'utf-8' ,(err, result) => {
    if(err){
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            return;
        }

        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first + second}`,
            (err, result) => {
                if(err){
                    return
                }
                
                console.log('done with this task')
            })
    })
})

console.log("starting next task")
const http = require('http')

//request, response
//req and res are both objects
//if this file is ran, it will not exit in the console since this is a server
//and servers will keep ko listening for requests

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end("this is the about page")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)
const http = require('http')

const data = require('./data')
http.createServer((req,res)=>
{
    res.write(JSON.stringify(data))
    res.end();
}).listen(5000);


// writiing in the file
console.log(process.argv[2])

//Accessing html in Node js 
const { publicDecrypt } = require('crypto');
const express = require('express')
const path = require('path')

const app = express();
const pathpublic = path.join(__dirname,'public')

app.use(express.static(pathpublic))
console.log(pathpublic)

//Removing URL from the extension
app.get('/home',(req,resp)=>{
    resp.sendFile(`${pathpublic}/home.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${pathpublic}/about.html`)
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${pathpublic}/error.html`)

})
app.listen(5000)


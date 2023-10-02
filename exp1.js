const express = require('express')

const app = express()

app.get('',(req,resp)=>
{
    resp.send('Hello')
})

app.get('/about',(req,resp)=>{
    resp.send('hello,This is about page')
})

app.get('/help',(req,resp)=>{
    resp.send('hello, This is help page')
})

app.listen(5000)
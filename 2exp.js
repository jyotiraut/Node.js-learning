const express = require('express')

const app = express()

app.get('',(req,resp)=>{
    resp.send(`'Hello,Welcome to Home page'
    <a href="/about">Go to About</a>`)
})

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"/>
    <button>Click me</button>
    <a href="/">Go to Home</a>
    `)
})
app.get('/help',(req,resp)=>{
    resp.send({
        name:'Jyoti',
        email:'jraut@gmail.com',
        roll:18
    })
})

app.listen(4000)
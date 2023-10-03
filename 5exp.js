//middleware
const express = require('express');
const reqFilter = require('./5middleware')

const route = express.Router()

const app = express();

route.use(reqFilter)



app.get('/',(req,resp)=>{       //req is request and resp is response
    resp.send('Hello World, WELCOME TO HOME PAGE');
});

app.get('/user',(req,resp)=>{
    resp.send('Hello World, WELCOME TO user PAGE');
}); 

route.get('/home',(req,resp)=>{
    resp.send('Hello World, WELCOME TO home PAGE');
}); 

route.get('/about',(req,resp)=>{
    resp.send('Hello World, WELCOME TO About PAGE');
});

app.use('/',route)

app.listen(5000);

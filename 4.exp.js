//middleware
const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
   if(!req.query.age){
       resp.send('Enter your age')
   }   
   else if(req.query.age<18)
   {
    resp.send("Your not not eligible to access the page")
   } 

   else {
    next();
   }
}

app.use(reqFilter)

app.get('/',(req,resp)=>{       //req is request and resp is response
    resp.send('Hello World, WELCOME TO HOME PAGE');
});

app.get('/user',(req,resp)=>{
    resp.send('Hello World, WELCOME TO ABOUT PAGE');
}); 

app.listen(5000);
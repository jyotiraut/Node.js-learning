module.exports= reqFilter = (req,resp,next)=>{
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
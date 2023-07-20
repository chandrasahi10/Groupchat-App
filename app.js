const express = require('express');
const fs = require('fs');

const app = express();


app.get('/login',(req,res,next)=>{
    res.send('<form onSubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="name1"></input><button type="submit">Login</button></form>');
});

app.post('/login', (req,res,next)=>{
    res.redirect('/');
});

app.get('/', (req,res,next)=>{
    res.send('<form action="/" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form>');
});

app.post('/',(req,res,next)=>{
    fs.writeFile('message.txt','message',(err)=>{
        if(err){
            console.log(err);
        }
    res.redirect('/');
    });
})


app.listen(3000);
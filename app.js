const express = require('express');
const app = express();

app.get('/login',(req,res,next)=>{
    res.send('<form onSubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="name"></input><button type="submit">Login</button></form>');
});

app.post('/login', (req,res,next)=>{
    res.redirect('/');
});

app.get('/', (req,res,next)=>{
    res.send('<form><input type="text" name="message"><button type="submit">Send</button></input></form>');
})


app.listen(3000);
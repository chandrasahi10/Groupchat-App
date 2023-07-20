const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get('/login',(req,res,next)=>{
    res.send('<title>Login Page</title><form onSubmit = "localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><label>Enter username to login:</label><br><br><input id="username" type="text" name="name" placeholder="Username"></input><br><br><button type="submit">Login</button></form>');
});

app.post('/login', (req,res,next)=>{
    res.redirect('/');
});

app.get('/', (req,res,next)=>{
    fs.readFile("user.txt", (err,data) => {
        if(err){
            console.log(err);
            data = 'No chats are available'
        }
        res.send(
            `<title>Chat-App</title><label>Chats:</label><br><br>${data}<hr><form onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
               <input type="hidden" name="username" id="username"><br>
               <label>Enter message to send:</label><br><br>
               <input type="text" name="message" placeholder="message"><br><br>
               <button type="submit">Send</button>
            </form>`
            );
    })
   
});

app.post('/',(req,res,next)=>{
    fs.writeFile('user.txt',`${req.body.username}: ${req.body.message} `,{flag: 'a'},(err)=>{
        if(err){
            console.log(err);
        }else{

            res.redirect('/');
        }
    })
    });


app.listen(3000);
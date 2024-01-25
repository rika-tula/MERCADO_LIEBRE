const express = require('express');
const path = require('path')
const port = 3030

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/registro',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/iniciarSecion',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.listen(port,() =>console.log(`http://localhost:${port}`))
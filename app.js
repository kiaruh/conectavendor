const express = require('express');
const fs =require('fs')
const app = express();
const path = require('path');
const { send } = require('process');

app.use(express.static(path.resolve(__dirname,'./public')));

app.set('port',process.env.PORT || 3000)
app.set('view engine', 'ejs');


app.listen(app.get('port'),() => 
    console.log('Server start http://localhost:' +app.get('port')));

app.get('/',(req,res)=>
    res.render(path.resolve(__dirname,'./views','home.ejs')))
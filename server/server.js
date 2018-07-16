const express = require('express'); 
const app = express(); 
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const cookieSession = require('cookie-session');
const path = require('path');
const rfs = require('rotating-file-stream');
const fs = require('fs');
const path  = require('path'); 
const mongoose = require('mongoose');
const keys = require('./services/keys');
const passport = require('passport');
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;  

app.use(express.static(publicPath)); 

app.get('*', (req,res)=> {
	res.sendFile(path.join(publicPath, 'index.html')); 
}); 

app.listen(port, () =>{
console.log('ServerIsUp!')
});

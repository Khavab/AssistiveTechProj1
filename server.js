const http = require('http');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
app.use(express.json());
app.use(express.static("express"));

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'static')));

// default URL for website
app.use('/', function(req,res){
    res.render("home");
    //__dirname : It will resolve to your project folder.
  });

const server = http.createServer(app);
const port = 3000;
server.listen(port);


console.debug('Server listening on port ' + port);
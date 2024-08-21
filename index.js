const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const path = require('path');
const app = express();
const router = require('./routes/index');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,'/views')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', router);

app.listen(port, (err)=>{

    if(!err){
        console.log(`Server running on http://localhost:${port}`);
        
    }

});
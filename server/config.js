const express = require('express');
const server = express();
const bodyParser = require('body-parser');


function setupExpress(){
    server.use(bodyParser.urlencoded({extended:false}));
    return server;
}


module.exports = setupExpress();
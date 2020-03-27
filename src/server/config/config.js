import express from 'express';
import bodyParser from 'body-parser';
import expressLayout  from 'express-ejs-layouts';
import path from 'path';

const server = express();

function setupExpress(){
    server.set('view engine' , 'ejs');
    server.use(expressLayout)
    server.use(bodyParser.urlencoded({extended:false}));
    return server;
}


export default setupExpress();
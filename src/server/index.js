import app from "./config/config";
import index from './router/route';
import path from "path";

/* 
Arrumar essa parte depois

*/

import express from "express";

//configuração da pasta de views        
app.set('views', path.join(__dirname, 'views'));
//configuração assets
app.use(express.static(__dirname + '/public'));



function start(client,port){
        app.use('/',index)
        app.listen('3000',()=> {
                console.log("Server started on port 3000");    
        })
}


export  default  start ;

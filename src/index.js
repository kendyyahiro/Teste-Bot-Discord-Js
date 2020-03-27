import start  from './server' ;
import { Client }  from "discord.js" ;
import config from './bot/config.json' ;
let client  = new Client();


start(client , 3000);




client.on('ready', ()=>{
    console.log(`Connected as ${client.user.tag}`)
})


client.login(config.token)
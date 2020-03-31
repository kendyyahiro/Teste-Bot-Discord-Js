import  express from 'express';
import  { client } from '../index'
const Router = express.Router();
import  botDiscord from "../../bot"
import Discord from "discord.js";
import bot from '../../bot';


Router.get('/dashboard' ,  (req,res)=>{
    //    let user = new  Discord.User(botDiscord,{id:'144668952776146944'})
 
        


    bot.guilds.cache.forEach(el =>{
      
        console.log(el.name);
        console.log(el.memberCount);
    });



  
    res.render('pages/dashboard' , { title: 'Dashboard' , users : botDiscord.users  } );
})

Router.get('/', (req,res)=>{
    res.render('pages/login' , {title: "Login"});
});


export default Router;
import dotenv from "dotenv";
import start  from './server' ;
import { Client }  from "discord.js" ;
import  botDiscord from "./bot"

dotenv.config();
const port  = process.env.PORT_SERVIDOR_WEB
start(port);



const {start , server} = require("./server/server");
const { Client } = require("discord.js");
let client  = new Client;
console.log(webserver);

start(client , 3000);
client.on('ready', ()=>{
    console.log(`Connected as ${client.user.tag}`)
})


client.login("NTk2MTYzNzU4ODQ2Mzc3OTk1.XnlScg.0R2susnE6MhSAfGt5RWakca0B7g")
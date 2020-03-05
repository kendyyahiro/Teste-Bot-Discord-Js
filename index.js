const Discord = require("discord.js");
const bot = new Discord.Client();  //Fazer a conexão direta com a API do Discord

const config = require('./config.json');
const links = require('./links.json');

const readline = require('readline');
var currentMin = new Date().getMinutes();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*************************************************************** */
var data = new Date();
var dias = new Array('domingo','segunda','terça','quarta','quinta','sexta','sábado');

var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/0' + (mes+1);
var str_hora = hora + ':' + min;

/*Receber membros novos no nosso canal Pet-Sistemas*/
bot.on("guildMemberAdd", member =>{
  member.guild.channels.get('666362832392159289').send(member.user.username + ' entrou no server!');
  member.send('Bem-vindo ao servidor!');
});

bot.on("guildMemberRemove", member =>{
  member.guild.channels.get('666362832392159289').send(member.user.username + ' saiu no server!');
  member.send('Bem-vindo ao servidor!');
});
/*Inicializar o bot*/
bot.on("ready", member => {

  var testChannel = bot.channels.find(channel => channel.id === '680494579723665532');
  console.log("The Bot Server is logged in.");
  console.log(str_hora);
  console.log(str_data);

  if(str_hora === '16:19' && str_data === '21/02'){
    console.log("OK!");
  }
  setInterval(() => { testChannel.send("Teste de chamada para cada servidor")}, 1000);
});

/*Enviar mensagem*/
bot.on('message', message => {
  responseObject = links;
  if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
  }

  if(message.content.startsWith(config.prefix + 'ping')){
    message.reply('pong');
    message.channel.send('pong2');
  }
});

bot.login("Njc0NDgyOTQ2NDY3NjkyNTY1.XmFYrg.7avMmRUNwb4eJYz-GP02rxjxz4E")
const Discord = require("discord.js");
const bot = new Discord.Client();
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

// Mostra o resultado

bot.on("ready", member => {

  var testChannel = bot.channels.find(channel => channel.id === '680494579723665532');
  console.log("The Bot Server is logged in.");
  console.log(str_hora);
  console.log(str_data);

  if(str_hora === '16:19' && str_data === '21/02'){
    console.log("OK!");
  }
  setInterval(() => { testChannel.send("Teste de chamada para cada servidor")}, 604800000);
});
/*
bot.on("message", mensagem => {
  if(str_hora === '15:54:0'){
    testChannel.send("Teste de chamada para cada servidor");
  }
})
*/
bot.login("Njc0NDgyOTQ2NDY3NjkyNTY1.XkQZxw.CMUQ_AcfUuB4gKjljbxxcUyU_10")
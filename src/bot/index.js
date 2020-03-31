import dotenv from "dotenv";
dotenv.config();
import Discord, { MessageAttachment } from "discord.js";
import fs from "fs";

const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
const bot = new Discord.Client(); //Fazer a conexão direta com a API do Discord
/*************************************************************** */
console.log(fs.readdirSync("./src/bot/commands"));

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./src/bot/commands").filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}



bot.on("guildMemberAdd", member => {
  member.guild.channels
    .get("666362832392159289")
    .send(member.user.username + " entrou no server!");
  member.send("Bem-vindo ao servidor!");
});

bot.on("guildMemberRemove", member => {
  member.guild.channels
    .get("666362832392159289")
    .send(member.user.username + " saiu no server!");
  member.send("Bem-vindo ao servidor!");
});
/*Inicializar o bot*/
bot.on("ready", async () => {
  bot.user.setActivity("seila");

  bot.channels.cache.forEach(el => {
    if (el.type === "text") {
      console.log(el);
    }
  });

  bot.guilds.cache.forEach(el => {
    console.log(el.name);
    console.log(el.memberCount);
  });
});

/*Enviar mensagem*/
bot.on("message", message => {
  const embed = new Discord.MessageEmbed()
  // Set the color of the embed
  .setColor(0xa626a6);
  // Set the main content of the embed
  //.setDescription('Descricao do Projeto teste');
// Send the embed to the same channel as the message 
  if (message.content.toLowerCase().startsWith(`${prefix}initscrumproject`)) {
    console.log(message.content.slice(18));
    let nameProject = message.content.slice(18)
    embed.setTitle(nameProject);
    console.log(nameProject.length);
    
    if(nameProject.length <= 0 ) {
      console.log('aqui');
      
      embed.setTitle("O Projeto deve ter um nome ")
      message.channel.send(embed)
      return
    
    }
  const descriptionProject = "";
 
  //message.channel.send("Funcionou Otario")
    bot.commands.get('initScrum').execute(message,bot,nameProject, descriptionProject,embed)
   }

  if (message.author.bot) return;

  if (message.content.toLowerCase().startsWith(`${prefix}lucas`)) {

     message.guild.channels.cache.forEach(el => {
       if(el.type == "text"){
        message.channel.send(el.name);
        if(el.name === "grupos-pet"){
          el.delete();
        }
       }
     });
    message.channel.send("Ban Lucas");
  }
  if (message.content.startsWith(`${prefix}kaio`)) {
    message.channel.send("Ban Kaio");
  }
  if (message.content.startsWith(`${prefix}Vinicius`)) {
    message.channel.send("Ban Vinicius");
  }
  if (message.content.startsWith(`${prefix}Gustavo`)) {
    message.channel.send("Ban Gustavo");
  }
});

bot.login(token);

export default bot;

module.exports = {
	name: 'initScrum',
	description: 'Cria um novo projeto',
	execute(message,bot ,nameProject,descritptionProject ,embed) {
        embed.setDescription(`Criado canal ${nameProject} `);
        message.guild.channels.create(nameProject , { 'type':'text'});
        message.channel.send(embed)

	},
};
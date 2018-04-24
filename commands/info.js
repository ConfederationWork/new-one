const {RichEmbed} = require('discord.js');
exports.run = async (bot, message, args) => {

  const embed = new RichEmbed()
  .setAuthor('Confederation Bot Info',bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(`Information for BOT`, message.guild.iconURL)
  .addField("Server owner", `${message.guild.owner}`, true)
  .addField("BOT OWNER", `lesterleal`, true)
  .addField("AC Members", `${message.guild.memberCount}`, true)
  .setDescription("Confederation Core Development Twitter [Follow us](https://twitter.com/CCD_Team_AC) And Thank you for Supporting us. ```Avarian Confederation```")
  .setColor("#05053B")
  .addField('This bot our language node.js','discord.js.org')
  .addField("AC Server Region", `${message.guild.region}`, true);

  message.channel.send({embed});
};



exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'botinfo',
  description: 'Confederation Bot || Information',
  usage: 'botinfo'
};

const {RichEmbed} = require('discord.js');
exports.run = (bot, message, args) => {

  const embed = new RichEmbed()
  .setDescription('In the list')
  .setFooter("Confederation Core Development", bot.user.avatarURL)
  .setColor("#D0021B")
  .setThumbnail(bot.avatarURL)
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .addField('Arvorious','AC Leader')
  .addField('lesterleal','CCD Developer')
  .addField('Tho_rn','CCD Developer')
  .addField('Ninqax','CCD Developer|HR')
  .addField('AntonioWeiss','CCD Developer')
  .addField('Fuzar','CCD Developer')
  .addField('TotallyNotPipster','CCD Developer')



  message.channel.send({embed});
};



exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'acdevs',
  description: 'Avarian Confederation||Developers team',
  usage: 'acdevs'
};

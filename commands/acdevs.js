const {RichEmbed} = require('discord.js');
exports.run = (bot, message, args) => {

  const embed = new RichEmbed()
  .setDescription('In the list')
  .setFooter("Confederation Core Development", bot.user.avatarURL)
  .setColor("#D0021B")
  .setThumbnail(bot.avatarURL)
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .addField('Arvorious','AC Leader')
  .addField('lesterleal','CCD Team')
  .addField('Tho_rn','CCD Team')
  .addField('Ninqax','CCD Team|HR')
  .addField('AntonioWeiss','CCD Team')
  .addField('Fuzar','CCD Developer')
  .addField('TotallyNotPipster','CCD Team')
  .addField('Anna','CCD Team|HR')
  .addField('5567miller','CCD Team')



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

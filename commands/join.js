const {RichEmbed} = require('discord.js');
exports.run = async (bot, message, args) => {

  const embed = new RichEmbed()
  .setAuthor('Avarian Confederation Clan',bot.user.avatarURL)
  .addField("AC Leader", `Arvorious`, true)
  .setDescription("Avarian Confederation [Join Clan](https://www.roblox.com/My/Groups.aspx?gid=4023605) Make sure to Always active. ```Avarian Confederation```")
  .setColor("#05053B")

  message.channel.send({embed});
};



exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'join',
  description: 'AC Clan Join Link||',
  usage: 'join'
};

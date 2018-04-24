const {RichEmbed} = require('discord.js');
exports.run = async (bot, message, args) => {

  const embed = new RichEmbed()
  .setAuthor('Suggestion Command',bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .addField("BOT OWNER", `lesterleal`, true)
  .setDescription("if you want any Suggestion or Add Command for the Bot DM @lesterleal ,```Confederation Bot```")
  .setColor("#05053B")
  .addField('Require Confederation Bot are Language','discord.js.org|node.js')

  message.channel.send({embed});
};



exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'suggestcommand',
  description: 'Suggestion Command or Add Command for the Bot||',
  usage: 'suggcmd'
};

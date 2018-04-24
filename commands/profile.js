const {RichEmbed} = require('discord.js');
exports.run = async (user, message, args) => {
  user = message.author;
  if (message.mentions.users.size > 1) { return message.reply("Cannot get info of multiple users yet."); }
  else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }

  gamename = "No game"; gamestream = "Not streaming";
  if (user.presence.game) {
      gamename = user.presence.game.name;
      gamestream = user.presence.game.streaming;
    }

  const embed = new RichEmbed()
  .setTitle("User Info")
  .setAuthor(user.username)
  .setDescription("Displays user's info.")
  .setColor("#0ba333")
  .setTimestamp()
  .addField("Username", user.username, true)
  .setThumbnail(user.avatarURL)
  .addField("ID", user.id, true)
  .addField("Tag", user.tag, true)
  .addField("Is Bot?", user.bot, true)
  .addField(":video_game: Game", "Name: " + gamename + "\nStreaming: " + gamestream, true)
  .addField("Status", user.presence.status, true);


  message.channel.send({embed});
};



exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'profile',
  description: 'Members Profile and information||',
  usage: 'profile'
};

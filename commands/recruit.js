exports.run = async (client, message, args) => {
  message.channel.send('recruiting?')
    .then(msg => {

      msg.edit(`@everyone __**R|Head down to GRP and Recruit more members!!**__ || https://www.roblox.com/games/6194809/Group-Recruiting-Plaza||`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'recruit',
  description: 'Recruiting members in GRP||',
  usage: 'recruit'
};

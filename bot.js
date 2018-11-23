const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['488698374560677888','320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("--",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('!wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(`تم تغير الواتشنق الى ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('!Le')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(`تم تغير اللسننق الى ** ${argresult} \ ** `)
} else 
  if (message.content.startsWith('!p')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("dnd")
    message.channel.send(`تم تغير البلاينق الى  ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('!st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("dnd")
   message.channel.send(`تم تغير الستريمنق الى ** ${argresult} \ ** `)
}
});

client.login(process.env.THUNDER);

const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("501760075048681494")
setInterval(function() {
channel.send(`#daily`);
}, 25)
})
 
 
client.login('TOKEN');

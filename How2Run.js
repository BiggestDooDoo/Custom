const discord = require ('discord.js');
var client = new discord.Client();

client.on ("ready", () => {
    console.log ("readeh");

    client.user.setGame ("DM YMA_ST1#0021 for help!");
});

const prefix = "R!"
const prefix2 = "r!"

client.on ("message", (message) => {
    
    if (message.author.bot) return;

    if (message.content.startsWith ("")) {
        message.react('✅');
        message.react('❎');
    }
});

client.login (process.env.BOT_TOKEN);

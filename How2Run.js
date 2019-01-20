const discord = require ('discord.js');
var client = new discord.Client();

client.on ("ready", () => {
    console.log ("readeh");

    client.user.setGame ("DM YMA_ST1#0021 for help!");
});

const prefix = "R!"

client.on ("message", (message) => {
    
    message.content.toLowerCase;
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix)) {
        message.react('✅');
        message.react('❎');
    }
});

client.login (process.env.BOT_TOKEN);

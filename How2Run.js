const discord = require ('discord.js');
var client = new discord.Client();

client.on ("ready", () => {
    console.log ("readeh");

    client.user.setGame ("DM YMA_ST1#5688 for help!");
});

client.on ("message", (message) => {
    
    if (message.author.bot) return;

    message.react('✅');
    message.react('❎');
    
});

client.login (process.env.BOT_TOKEN);

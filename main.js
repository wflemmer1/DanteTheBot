var Discord = require('discord.io');
var auth = require('./auth.json');
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'needy':
                bot.sendMessage({
                    to: channelID,
                    message: " \"I\'m Homer, look at me i\'m sooooo coool\" <:SMURKYSPOOKED:472182354169823263>"
                })
            // Just add any case commands if you want to..
         }
     }
});

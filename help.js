const commando = require('discord.js-commando');

class HelpCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'help',
            group: 'random',
            memberName: 'help',
            description: 'You need help?'
        });
    }
    async run(message, args){
        var help = "Oi";
        message.send(help); 
    }
}

module.exports = HelpCommand;
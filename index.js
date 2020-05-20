const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const token = "NzEyMjg3MTQ3MzE4NTc1MTc0.XsPYGA.oIUeoftr7P8CVK5bff2lgCqsx4g";
const PREFIX = "!";

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === '!play') {
    // Irá entrar no canal de voz se o usuário que a chamou estiver no canal.
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('/home/discord/audio.mp3', {
        volume: 0.5,
      });
      connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
    } else {
      message.reply('Você precisa está no canal primeiro!');
    }
  }
});  

client.on('message', (message) => {
  // Perguntas básicas de teste para o bot
    if(message.content == 'Tudo bem?') {
        message.reply('Tudo ;)');
    }
    if(message.content == '!faz') {
        message.channel.send('Não faço nada ainda. :woman_shrugging: ');
    } if(message.content == 'oi') {
        message.channel.send('Iai :ok_hand:')
    } if(message.content == '?'){
        message.channel.send('??????')
    //Mostrar o avatar do usuário 
    } if (message.content === 'avatar') {
        message.reply(message.author.displayAvatarURL());
      } if (message.content === 'F') {
        // Irá realizar a ligação com o MessageAttachment
        const attachment = new MessageAttachment('https://www.meme-arsenal.com/memes/f32fdf5e6e0260969d6bd1b55c473421.jpg');
        // Irá enviar o comando no canal.
        message.channel.send(attachment);
      } client.on('guildMemberAdd', member => {
        // A mensagem irá ser enviada no canal que foi designado:
        const channel = member.guild.channels.cache.find(ch => ch.name === 'Geral');
        // Não irá fazer nada caso o canal não seja encontrado.
        if (!channel) return;
        // Irá enviar uma mensagem mencionando o membro.
        channel.send(`Bem-vindo, ${member}`);
      });
});
client.login('NzEyMjg3MTQ3MzE4NTc1MTc0.XsPYGA.oIUeoftr7P8CVK5bff2lgCqsx4g')
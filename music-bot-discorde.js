
//Bot de som do discord


const Discord = require ('discord.js');
global.Discord = require('discord.js');
const bot = new DIscord.CLient();
const ytdl = require('ytdl-core');
const streamOpetion = {seek: 0, volukme: 1};
const token = 'OTEwMjgyNjA3Mzk1MjE3NDQx.G0VsSd.p0vx1xGYrZOEdJnZtl-eZGgJ1bYEhwi1sNfSm0';
bot.login(token);

bot.on('ready', () => {
    console.log('Estou pronto para ser usado!')
});

bot.on('message', msg =>{
    if (msg.author.bot){
        return
    }

    if (msg.content.tolowerCase().startswith("?play")){
        let VoiceChannel = msg.guild.channels.find(channel => channel.id ==='910282607395217441')
     
        if (VoiceChannel == null){
            console.log('Canal não foi encontrado!');
        }
        if (voiceChannel !== null){
            console.log('O canal Foi Encontrado!');

            voiceChannel.join()
            .then(connection => {
                const stream = ytdl('https://youtu.be/VlZkpUUM-Rk',{filter:'audioonly'});


                const dj = connection.playStream(stream, streamOpetion);
                DJ.on('end ', ebd =>{
                    VoiceChannel.leave();
                });
            })
            .catch(console.error);
        }
    }
})

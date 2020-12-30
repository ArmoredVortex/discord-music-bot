module.exports = {
    name : "disconnect",
    execute(client,message,args){
        if (message.guild.me.voice.channel != message.member.voice.channel){
            return message.channel.send(`You are not in the same voice channel as the bot !`);
        }
        message.member.voice.channel.leave();
    }
}
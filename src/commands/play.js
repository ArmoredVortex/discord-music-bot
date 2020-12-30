module.exports = {
    name : "play",
    async execute(client,message,args){
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ! What a noob`);
        if (!args[0]) return message.channel.send(`Haha noob you forgot the song title`);
        client.player.play(message, args.join(' '),{firstresult : true});
    }
}
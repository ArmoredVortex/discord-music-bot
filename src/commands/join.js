module.exports = {
    name : "join",
    execute(client,message,args){
        if(!message.member.voice.channel){
            message.channel.send('You need to be in a voice channel to use this command.');
            return;
        }
        message.channel.send(`Joined`+' `'+ message.member.voice.channel.name +'`')
        message.member.voice.channel.join()
    }
}
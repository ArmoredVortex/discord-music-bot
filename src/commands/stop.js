module.exports = {
    name : 'stop',
    execute(client,message,args){
        if (!client.player.getQueue(message)) return message.channel.send(`I can't stop stuff when theres nothing playing`);
        client.player.stop(message);
        message.channel.send(`Music **stopped** || forever || !`);
    }
}
module.exports = {
    name : "ping",
    async execute(client,message,args){
        var yourping = new Date().getTime() - message.createdTimestamp
        message.channel.send(`Pong! Bot Latency:`+'`'+yourping/100+' ms`')
    }
}
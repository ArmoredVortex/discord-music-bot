module.exports = {
    name : 'queue',
    execute(client,message,args){
        const queue = client.player.getQueue(message);
        if (!queue){
            return message.channel.send(`No songs currently playing !`);
        }
        message.channel.send(`**Server queue - ${message.guild.name} ${queue.loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    }
}
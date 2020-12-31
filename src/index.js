require('dotenv').config();
const { Client, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const token = process.env.BOT_TOKEN ;
const client = new Client();
prefix = process.env.BOT_PREFIX ;
client.commands = new Collection();

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

const commands = readdirSync('src/commands');
for(const file of commands){
    if (file.endsWith('.js')){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
    }
}

client.on('ready',() =>{
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', message =>{
    if(message.author.bot || !message.content.startsWith(prefix) || !message.guild) return ;
    const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if(!client.commands.has(cmd)) return;
        const command = client.commands.get(cmd);
    try{
        command.execute(client,message,args);
        console.log(`${message.author.tag} used ${cmd} command.`)
    }
    catch(error){
        console.error(error)
    };
})
client.player.on('trackStart', (message, track) => {
    message.channel.send(`Now playing ${track.title}...`)
})

client.login(token);

// Self Ping
const fetch = require('node-fetch');
setInterval(async () =>{
    await fetch(process.env.PING_URL)
},240000)
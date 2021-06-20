//help

client.on("help", message => {

    message.channel.send(`
These are my commands:
**=help** - Displays the help menu
**=ping** - Sends the bots latency
**=ticket ** - Makes a ticket
**=suggest ** - Makes a suggestion
**=mcserver ** - Checks the status of a Minecraft Server
**=kick ** - Kicks a specified member
**=mute ** - Mutes a specified member
**=unmute ** - Unmutes a specified member
`)
  })

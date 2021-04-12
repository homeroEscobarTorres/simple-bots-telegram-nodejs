const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((context) => {
	console.log('Servizio avviato...')
	context.reply('Servizio ECHO avviato')
})
// bot.on('text', context=>{
// 	text=context.update.message.text
//   	context.reply('Hai scritto: '+text)
// })
bot.hears('ciao', message=> {
	message.reply('Ci ha salutato')
})
bot.launch()
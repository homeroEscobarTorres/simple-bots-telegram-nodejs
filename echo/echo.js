const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((context) => {
	console.log('Service start...')
	context.reply('Service ECHO start')
})
bot.on('text', context=>{
	text=context.update.message.text
  	context.reply('User say: '+text)
})
bot.hears('hello', message=> {
	message.reply('Hello my friend')
})
bot.launch()
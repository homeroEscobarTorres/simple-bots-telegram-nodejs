const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const EXCHANGE=1.125
bot.start((message) => {
  	return message.reply('Il bot è avviato')
})
bot.command('eur', context=> {
        msg=context.update.message
	importo=msg.text.split(' ')[1]
	dollari=EXCHANGE*importo
	context.reply(`${dollari} USD`)
})
bot.command('usd', context=> {
        msg=context.update.message
	importo=msg.text.split(' ')[1]
	euro=importo/EXCHANGE
	context.reply(`${euro} EUR`)
})
bot.launch()
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const axios = require('axios');
bot.start((message) => {
  console.log('started:', message.from.id)
  return message.reply('Hello my friend, contact me by send /contact, or write anything');
})
bot.on('text', message=> {
  const subreddit = message.message.text;
  axios
    .get(`https://reddit.com/r/${subreddit}/top.json?limit=10`)
    .then(res => {
      const data = res.data.data;
      if (data.children.length < 1)
        return message.reply("The search on reddit haven't results.");
      const link = `https://reddit.com/${data.children[0].data.permalink}`;
      return message.reply(link);
    })
    .catch(err => {
      console.log(err);
      return message.reply('try to another search (in english)');
    });
});
bot.startPolling();
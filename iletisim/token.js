const { Telegraf } = require('telegraf');

const bot = new Telegraf('7542528408:AAGam7OZotVWx4rpy-e-mCnHMwF2iS22SXk'); // Tokenini buraya ekle

bot.start((ctx) => {
  ctx.reply('Merhaba, hoş geldiniz!');
});

bot.launch();

console.log('Bot çalışıyor...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Import "telegraf" library
const { Telegraf } = require("telegraf");
// Load all the configurations from ".env" file
require("dotenv").config();
const token = "6133544864:AAFppDxeo6aODDSioPjlp1U8BfDdyCdG4YQ";
// Create a bot instance.
const bot = new Telegraf(token);

// Start Command
// bot.start((ctx) => ctx.reply("Hello World!"));

// Function to start the bot
function startBot() {
  console.log("Bot is running...");
  bot.launch();
}

bot.command("start", (ctx) => {
  try {
    ctx.reply("Hello " + ctx.chat.first_name);
  } catch (err) {
    console.error(err);
    ctx.reply("Unkown error \nTry again");
  }
});

// run startBot function
startBot();

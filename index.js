require("dotenv").config();

const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, () => {
  console.log("Bot online (Render)");
});

client.on(Events.InteractionCreate, async (i) => {
  if (!i.isChatInputCommand()) return;

  if (i.commandName === "start") {
    await i.reply("🚀 กำลังเตรียมเปิดเซิร์ฟ...");
  }
});

client.login(process.env.TOKEN);

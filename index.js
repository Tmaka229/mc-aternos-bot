require("dotenv").config();

const express = require("express");
const {
  Client,
  GatewayIntentBits,
  Events
} = require("discord.js");

const app = express();

// ---------------- EXPRESS ----------------
app.get("/", (req, res) => {
  res.send("Bot is alive");
});

app.get("/start", async (req, res) => {
  console.log("START command received");
  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

// ---------------- DISCORD BOT ----------------
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

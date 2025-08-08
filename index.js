require('dotenv').config();

const
  { Client } = require('discord.js-selfbot-v13'),
  client = new Client({checkUpdate: false,}),
  reloadPresence = require("./config.js"),
  keepAlive = require('./keep_alive.js');

keepAlive();

// Normalize gateway READY payload to avoid library crash on null friend_source_flags
// Some accounts receive READY.d.user_settings.friend_source_flags = null
// The library expects an object, so we coerce it early.
client.on('raw', (packet) => {
  try {
    if (packet && packet.t === 'READY' && packet.d) {
      const data = packet.d;
      if (!data.user_settings) data.user_settings = {};
      if (data.user_settings.friend_source_flags == null) {
        data.user_settings.friend_source_flags = {};
      }
    }
  } catch (_) {
    // best-effort guard; ignore
  }
});

if (!process.env.TOKEN) {
  console.error("Add a token inside Secrets.");
  process.exit();
}

client.login(process.env.TOKEN);

  console.clear();
  client.on("ready", async () => {
        global.startTime = new Date();
        reloadPresence(client);
    })

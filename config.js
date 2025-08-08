const { RichPresence } = require("discord.js-selfbot-v13");

function reloadPresence(client) {
  try {
    const activity = new RichPresence()
      .setApplicationId("1272848185563549696")
      .setType("PLAYING") // You can experiment with LISTENING or STREAMING too
      .setName("Alora Mia")
      .setDetails("Come closer... I don’t bite, unless you ask.") // Teasing and personal
      .setStartTimestamp(global.startTime || Date.now())
      .setAssetsLargeImage("https://i.pinimg.com/originals/58/61/b7/5861b7f7c987775889e748d3ec1939cd.gif")
      .setAssetsLargeText("Stay a little longer...") // Romantic pull
      .setAssetsSmallImage("mp:avatars/390832676778803200/f72c077c48fb9b5c42a1d44330ec5f22.png")
      .setAssetsSmallText("I'm listening...") // Soft presence
      .addButton("Step into my world", "https://alora.im") // Inviting, not generic
      .addButton("Be with me now", "https://alora.im/join"); // Direct, emotional pull

    client.user.setActivity(activity.toJSON());
    client.user.setStatus("idle"); // Could also try "dnd" for a more passionate feel
  } catch (err) {
    console.error("Failed to set Rich Presence:", err);
  }
}

module.exports = reloadPresence;

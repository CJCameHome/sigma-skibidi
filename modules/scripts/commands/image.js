const utils = require("../../../modules/utils");
const fs = require("fs");

module.exports.config = {
  name: "image",
  author: "Carl James Valdez",
  version: "1.0",
  description: "Sends a random image.",
  adminOnly: false,
  usePrefix: true,
  cooldown: 5
};

module.exports.run = function ({ event, args }) {
  const images = fs.readdirSync("./modules/scripts/commands/cache/");
  const randomImage = images[Math.floor(Math.random() * images.length)];
  api.sendAttachment("image", `./modules/scripts/commands/cache/${randomImage}`, event.sender.id);
};
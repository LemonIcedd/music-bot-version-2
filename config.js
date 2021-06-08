module.exports = {
  Admins: ["632420820693811200", ""], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/fTfWe86uPE", //Support Server Link
  Token: process.env.Token || "ODEzOTkzNjc0MjkwNzU3NjQy.YDXYrw.YQ9fDK7WU6dTEb8aMZaAORJVkHE", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "813993674290757642", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "CwT_TsvWgXcLNNMsSyj5-3-LvkY4Jtz4", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "b2c", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://discord-musicbot-1.lemonicedd.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "f1038b67dccd4d089b525ca55110a4f7", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "7fa41bec927540218a135c15d455645f", //Spotify Client Secret
  },
};

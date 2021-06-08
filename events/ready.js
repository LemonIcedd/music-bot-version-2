module.exports = async (client) => {
  client.ready = true,
  client.on("ready", () => {
    const arrayOfStatus = [
        `${client.channels.cache.size} channels`,
        "Watching Bad Bitch Club ",
        `>help để xem lệnh của bot nhaaa!`,
        `Powered by shirone`,
        ];
    let index = 0;
setInterval(() => {
    if(index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.log(status);
    client.user.setActivity(status);
    index++;
}, 15000);
    client.log(`${client.user.username} has logged on!`);
});
};


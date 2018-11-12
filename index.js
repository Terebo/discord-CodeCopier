const client = require('discord-rich-presence')('470242275671277578');
let currentmonney = 0;
let timesprinted = 0;
setInterval(function(){ 
  currentmonney = currentmonney + 500;
  timesprinted = timesprinted + 1;
  console.log(currentmonney);
  client.updatePresence({
    state: 'Printed: ' + timesprinted,
    details: '€ ' + currentmonney + ",-",
    startTimestamp: Date.now(),
    endTimestamp: 1541174400,
    largeImageKey: 'printer',
    largeImageText: "Printer",
    smallImageKey: 'euro',
    instance: true,
  });
}, 1000);

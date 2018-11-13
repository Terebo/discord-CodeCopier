const client = require('discord-rich-presence')('470242275671277578');
let currentmonney = 0, timesprinted  = 0;
setInterval(function(){ 
  currentmonney = currentmonney + 500;
  timesprinted = timesprinted + 1;
  console.log(currentmonney);
  client.updatePresence({
    state: 'Printed: ' + timesprinted,
    details: '€ ' + currentmonney + ",-",
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 30000,
    largeImageKey: 'printer',
    largeImageText: "Printer",
    smallImageKey: 'euro',
    instance: true,
  });
}, 1000);

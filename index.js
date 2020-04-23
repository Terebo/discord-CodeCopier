const client = require('discord-rich-presence')('702847152703143977');
let linescopies = 0, preccopies  = 0;
var plurarl = "lines";
console.log("started")
setInterval(function(){ 
  linescopies = linescopies + Math.floor(Math.random() * (11 - -10) + -10);
  if (linescopies < 0){ linescopies = 0;}
  if (linescopies === 1) {plurarl = "line";} else {plurarl = "lines";}
  preccopiesun = (linescopies / (linescopies * (Math.floor(Math.random() * (30 - 20) + 20)))) * 100;
  preccopies = Math.round((preccopiesun + Number.EPSILON) * 100) / 100
  var nancheck = isNaN(preccopies);
  if (nancheck) {
  preccopies = 0;}
  console.log(preccopies);
  client.updatePresence({
    state: 'precentage copied: ' + preccopies + "%",
    details: linescopies + ' ' + plurarl + ' copied from StackOverflow',
    largeImageKey: 'vswinicon_100x',
    largeImageText: "Code",
    smallImageKey: 'codeblock',
    instance: true,
  });
}, 1000);

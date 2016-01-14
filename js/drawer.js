document.addEventListener("DOMContentLoaded", function(){
  var draw = SVG('drawing').size('100%', '100%');
  var genesis  = draw.use('Layer_1', '../svg/Genesis.svg').move(400,500);
  var genesisCartridge  = draw.use('Layer_1', '../svg/Genesis cartridge.svg').move(400,300);
  var SNES  = draw.use('Layer_1', '../svg/SNES.svg').move(0,500);
  var SNESCartridge  = draw.use('Layer_1', '../svg/SNES cartridge.svg').move(0,100);
  // draw.svg('../svg/Genesis.svg');
  // var rect = draw.rect(100, 100).attr({ fill: '#f06' })
}, false);
  


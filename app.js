'use strict';
let Blink1 = require('node-blink1');

// open a blink1 for use
let blink1;
try {
 blink1 = new Blink1.Blink1('20005E32');

 blink1.version(function(v){
     console.log(v);
 });
 //console.log(Blink1.devices());
} catch(err) {
    console.log("något gick fel");
    console.log(err);
}

try {

   setTimeout(() => {
       blink1.fadeToRGB( 100, 83, 251, 223);
   }, 0);

   setTimeout(() => {
       blink1.fadeToRGB( 100, 222, 108, 14);
   }, 1000);

   setTimeout(() => {
       blink1.fadeToRGB( 100, 26, 163, 14);
   }, 2000);

   setTimeout(() => {
       blink1.fadeToRGB( 100, 125, 15, 201);
       
   }, 3000);


} catch(err) {
   console.log(err);  // might get this if your USB port is weird/flaky
}
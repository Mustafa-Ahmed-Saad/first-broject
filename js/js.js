/*global console*/

var button = document.getElementsByClassName('lite');

function myFunction() {
   'use strict';
   document.getElementById('body').classList.toggle('lite-mod');
   document.getElementById('about-me').classList.toggle('lite-mod');
   document.getElementById('resume').classList.toggle('lite-mod');
   document.getElementById('testimonials').classList.toggle('lite-mod');
}

console.log(document.getElementsByTagName('body'));

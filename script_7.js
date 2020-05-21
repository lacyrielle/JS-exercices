let numberofrows = prompt("choose the number of rows for your pyramid ? ");
"use strict";

function Pyramid (numberofrows) {
    var pyramid = '';
    var outputBlock='\n';
    for (var i = 1; i <= numberofrows; i++) 
    {
    
    for (var j = 1; j <= (numberofrows - i); j++) 
    {
      outputBlock += ' ';
    }
    for (var k = 1; k <= i; k++) {
      outputBlock += '#' ;
    }
    pyramid += outputBlock + '\n';
    console.log(numberofrows);
    outputBlock='';
  }
return pyramid;

}

alert ('here is your pyramid : ' + Pyramid(numberofrows));



console.log("Hello dear, please choose a number")
let nbr = prompt("choose a number to factorise");

// Factorisation d'un nombre avec une FOR loop and will start the foor loop avec i = 1
// Définitio of the factorial function
function fact(nbr){
    var i, nbr, f = 1;
// We decrement i 
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i (On garde en valeur de f)
    }  
    return f;
  }

  alert ("here is your result: " + fact(nbr));
  
  console.log("here is your result: " + fact(nbr));
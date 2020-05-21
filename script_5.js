let numberofrows = prompt("choose the number of rows for your pyramid")


function Pyramid(numberofrows) {
    var pyramid = "";
    var outputBlock="";
    for (var i = 1; i <= numberofrows; i++) 
    {
        for (var j = 1; j <= i; j++) 
        {
            outputBlock+=j + "     ";
        }
        pyramid += outputBlock;
        console.log(outputBlock);
        outputBlock="";
    }
    return pyramid;
}
console.log("here is your pyramid : " + Pyramid(numberofrows));
// alert("")

function code() {
   // Get all elements that have a style attribute
   var elms = document.querySelectorAll("*[style]");

   // Loop through them
   Array.prototype.forEach.call(elms, function (elm) {
     // Get the color value
     var clr = elm.style.background || "";
 
     // Remove all whitespace, make it all lower case
     clr = clr.replace(/\s/g, "").toLowerCase();
 
     // Switch on the possible values we know of
     if (clr == "rgb(47,52,55)") {
       console.log(clr);
     }
     elm.style.background = null;
   });
}


var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    code();                 //  your code here
    i++;                    //  increment the counter
    if (i < 30000/50) {     //  if the counter < 30000/50, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 50)
}

myLoop();                   //  start the loop



setTimeout(() => {
 
}, 7000);

// alert("")
setTimeout(() => {
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
}, 7000);

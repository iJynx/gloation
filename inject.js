//Removes background of every element
function removeBackground() {
    //Get all elements that have a style attribute
    let elms = document.querySelectorAll("*[style]");

    //Loop through them
    for (let elm of elms) {
        elm.style.background = null; //Remove background
    }
}

//Call removeBackground() every 50 ms for the first 30 seconds
let callInterval = setInterval(removeBackground, 50);

//Stop calling after 30 seconds
setTimeout(() => {
    clearInterval(callInterval);
}, 30 * 1000);


 let display = false;

 function swapLogoDisplay() {
    display = !display;

    if(display) { 
        const logo = document.getElementById('logo');
        logo.innerHTML = '...<img src="./src/images/football.ico" width="50"/>';
    } else {
        const logo = document.getElementById('logo');
        logo.innerHTML = '';
    }
}

function logoFlasher() {
    setInterval(swapLogoDisplay, 5000);
}

 module.exports = {
    display: display,
    swapLogoDisplay: swapLogoDisplay,
    logoFlasher: logoFlasher
 } ;


 let display = false;

 function swapLogoDisplay() {
    display = !display;

    console.log('display', display);
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

/* export function swapLogoDisplay() {
    display = !display;

    console.log('display', display);
    if(display) { 
        const logo = document.getElementById('logo');
        logo.innerHTML = '...<img src="./src/images/football.ico" width="50"/>';
    } else {
        const logo = document.getElementById('logo');
        logo.innerHTML = '';
    }
}

export function logoFlasher() {
    setInterval(swapLogoDisplay, 5000);
}*/

/*  module.exports = {
    display: display,
    swapLogoDisplay: swapLogoDisplay,
    logoFlasher: logoFlasher
} 
 */
/* module.exports = {
    display:false,
    swapLogoDisplay : function() {
        display = !display;
    
        console.log('display', display);
        if(display) { 
            const logo = document.getElementById('logo');
            logo.innerHTML = '...<img src="./src/images/football.ico" width="50"/>';
        } else {
            const logo = document.getElementById('logo');
            logo.innerHTML = '';
        }
    },
    
    logoFlasher : function() {
        setInterval(swapLogoDisplay, 5000);
    }
} */


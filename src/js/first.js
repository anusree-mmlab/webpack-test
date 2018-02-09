
//import {display, swapLogoDisplay, logoFlasher} from './second';
const {display, swapLogoDisplay, logoFlasher} = require('./second.js');


logoFlasher();

 appendText = function() {
    const text = document.getElementById('text_val').value;
    let currentText = document.getElementById('text-container').innerHTML;
    currentText += '<br/>'+text;

    document.getElementById('text-container').innerHTML = currentText;

    document.getElementById('text_val').value = '';
}

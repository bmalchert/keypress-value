// Display element
const display = document.querySelector("#display");
const info = document.querySelector("#info");

// Paragraphs within the info element
const infoPara1 = document.createElement('p');
const infoPara2 = document.createElement('p');

info.appendChild(infoPara1);
info.appendChild(infoPara2);

// *********************************
// Keyboard Listener
// *********************************
addEventListener('keypress', keyboardHandler)

function keyboardHandler(e) {
  charCode = e.charCode;
  key = e.key;
  console.log(e);

  display.textContent = key;

  if (key === ' ') display.textContent = "SPACE"

  display.style.visibility = 'visible';

  // Create a paragraph element and add Character code text to it
  infoPara1.textContent = "Character Code: " + charCode;

  // Create a paragraph element and add Hex code text to it
  infoPara2.textContent = "Hex Code: 0x" + parseInt(charCode).toString(16);

  // info.textContent = "Character Code: " + charCode;
  // info.textContent +="Hex Code      : " + charCode;
}

// A function to convert a decimal number to a hexadecimal string
function toHex(n) {
  switch (n) {
    case 0:
      return '0';
      break;
    case 1:
      return '1';
    case 2:
      return '2';
    case 3:
      return '3';
    case 4:
      return '4';
    case 5:
      return '5';
    case 6:
      return '6';
    case 7:
      return '7';
  
    default:
      break;
  }
}
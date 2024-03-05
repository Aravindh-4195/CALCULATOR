let input_panel_value = '';
let firstTerm = '';
let lastTerm = '';
let finalValue = '';
let operation = '';
let substr = '';
for (var i = 0; i < 20; i++) {
  document
    .querySelectorAll('.Key')
    [i].addEventListener('mousedown', function () {
      let buttonPressed = this.innerHTML;
      let key = this.i;
      inputValue(buttonPressed);
    });
}
function inputValue(value) {
  if (value == '+' || value == '-' || value == '÷' || value == '×') {
    operation = value;
    document.querySelector('#entered_panel').value +=
      document.querySelector('#number_panel').value + value;
    firstTerm = document.querySelector('#number_panel').value;
    document.getElementById('number_panel').value = '';
  } else if (value === 'AC') {
    document.querySelector('#entered_panel').value = '';
    document.getElementById('number_panel').value = '';
  } else if (value == '=') {
    document.querySelector('#entered_panel').value +=
      document.querySelector('#number_panel').value + value;
    lastTerm = document.querySelector('#number_panel').value;
    firstTerm = Number(firstTerm);
    lastTerm = Number(lastTerm);
    if (operation == '+') {
      finalValue = String(firstTerm + lastTerm);
    } else if (operation == '-') {
      finalValue = String(firstTerm - lastTerm);
    } else if (operation == '×') {
      finalValue = String(firstTerm * lastTerm);
    } else {
      finalValue = String(firstTerm / lastTerm);
    }
    document.getElementById('number_panel').value = finalValue;
  } else if (value == '<i class="fa-solid fa-delete-left"></i>') {
    substr = document.querySelector('#number_panel').value;
    substr = substr.substring(0, substr.length - 1);
    document.querySelector('#number_panel').value = substr;
  } else {
    document.querySelector('#number_panel').value += value;
  }
}
function keyPressAnime(key) {
  document.querySelectorAll('.Key')[key].classList.add('key_pressed');
}
function keyReleaseAnime(key) {
  document.querySelectorAll('.Key')[key].classList.remove('key_pressed');
}

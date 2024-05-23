function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function changeColor() {
    const colorPicker = document.getElementById('color');
    const calculator = document.getElementById('calculator');
    calculator.style.backgroundColor = colorPicker.value;
}

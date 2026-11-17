
const display = document.getElementById('display');

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!/^[0-9+\-*/. ]+$/.test(display.value)) {
            throw new Error("Invalid");
        }

        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();
    }
    catch {
        display.value = 'Error';
    }
}

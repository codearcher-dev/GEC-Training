const display = document.getElementById('calc-result');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendNumber(number) {
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if (!['+', '-', '*', '/'].includes(lastChar)) {
        display.textContent += operator;
    }
}

function appendDot() {
    const currentText = display.textContent;
    if (!currentText.includes('.')) {
        display.textContent += '.';
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent).toString();
    } catch {
        display.textContent = 'Error';
    }
}

document.addEventListener("keydown", function (event) {
    handleKeyPress(event.key);
});

function handleKeyPress(key) {
    if (!isNaN(key)) {
        // If the key is a number
        pressButton(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        pressButton(key);
    } else if (key === 'Enter' || key === '=') {
        pressButton('=');
    } else if (key === 'Backspace') {
        pressButton('Backspace'); // or 'DEL' depending on your calculator
    } else if (key === '.') {
        pressButton('.');
    }
}

function pressButton(value) {
    // This should simulate what happens when a calculator button is clicked
    // Example:
    document.querySelector(`button[data-value="${value}"]`).click();
}

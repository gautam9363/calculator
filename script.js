const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const maxLength = 20; // Set your desired character limit here

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            display.textContent = '';
        } else if (button.textContent === 'DEL') {
            if (display.textContent === 'Error') {
                display.textContent = '';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
        } else if (button.textContent === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent.length < maxLength) {
                display.textContent += button.textContent;
            }
        }
    });
});

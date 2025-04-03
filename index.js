const display = document.getElementById("display");

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Replace % with /100 to calculate percentage
        display.value = eval(display.value.replace(/%/g, '*100/'));
    } catch (error) {
        display.value = "error";
    }
}

document.addEventListener("keydown", (event) => {
    if (/[\d+\-*/.%=]/.test(event.key)) {
        if (event.key === "=" || event.key === "Enter") {
            calculate();
        } else {
            appendToDisplay(event.key);
        }
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});

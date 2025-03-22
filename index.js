const display = document.getElementById("display");

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function appendToDisplay(input) {
    display.value += input;

}
function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "error";
    }
}
document.addEventListener("keydown", (event) => {
    if (/[\d+\-*/.=]/.test(event.key)) {
        if (event.key === "=") {
            calculate();

        }
        else {
            appendToDisplay(event.key);

        }
    }
    else if (event.key === "Enter") {
        calculate();

    }
    else if (event.key === "Backspace") {
        deleteLast();

    }
    else if (event.key === "Escape") {
        clearDisplay();

    }
});
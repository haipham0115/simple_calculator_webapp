const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.id === "clear") {
            display.value = "";
        } else if (this.id === "backspace") {
            display.value = display.value.slice(0, -1);
        } else if (this.id === "equals") {
            display.value = eval(display.value);
        } else {
            display.value += this.innerHTML;
        }
    });
}

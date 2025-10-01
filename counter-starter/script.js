const add = (step) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
};

const multiply = (step) => {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;
};

function getInputValue() {
    let numberElement = document.getElementById("number");
    const numberInput = document.getElementById('numberinput');
    const typedValue = numberInput.value;
    numberElement.innerText = typedValue;
}
function clearScreen () {
    document.getElementById("result").value = "";
}

function setScreenValue(value) {
    const r = document.getElementById("result");
    if (r.value === "Enter an expression " || r.value === "Invalid expression ") 
        r.value = "";
        r.value += value;

}

function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();
}

if (expression === '') {
    resultElement.value = 'Enter an expreession';
    return;

}

try {
    returnElement.value = eval(expression);
} catch (e) {
    returnElement.value = 'Invaild expression';
}
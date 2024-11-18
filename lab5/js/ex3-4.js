function calculator() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const operation = document.getElementById("operation").value;

    let result;
    if (operation === '+') {
        result = a + b;
    } else if (operation === '-') {
        result = a - b;
    } else if (operation === '*') {
        result = a * b;
    } else if (operation === '/') {
        if (b !== 0) {
            result = a / b;
        } else {
            alert("Division by zero");
            return;
        }
    }
    alert("Result: " + result);
}
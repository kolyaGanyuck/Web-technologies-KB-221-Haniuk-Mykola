function calculateResult() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let operation = document.getElementById("operation").value;

    let result = calc(a, b, operation);
    alert(result);
}

function calc(i, k, operation) {
    let a = Number(i);
    let b = Number(k);

    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Division by zero";
        default:
            return "Unknown operation";
    }
}
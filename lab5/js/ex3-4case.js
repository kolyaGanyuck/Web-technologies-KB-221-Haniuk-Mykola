function calculator() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;

    }
    alert("Result: " + result);
    location.reload();
}
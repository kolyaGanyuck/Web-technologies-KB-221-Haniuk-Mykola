let a = 120;
let b = 10;
let operation = "/"
alert(calc(a,b,operation))
function calc(a, b, operation) {
    let number = Number(a);
    let number1 = Number(b);
    switch (operation) {
        case "+":
            return number + number1;
        case "-":
            return number - number1;
        case "*":
            return number * number1;
        case "/":
            if (number1 !== 0){
                return number / number1;
            }
            else return "Division by zero"
    }
}
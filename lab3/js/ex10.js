let a = prompt("Enter number");
let number1 = Number(a);
isEven(number1)

function isEven(number1) {
    if (number1 % 2 === 0) {
        alert(true);
    } else {
        alert(false)
    }
}
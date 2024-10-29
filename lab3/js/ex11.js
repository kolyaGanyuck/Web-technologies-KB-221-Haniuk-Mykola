isEven(a);

function isEven() {
    let value = document.getElementById("numberInput").value;
    let number = Number(value);
    if (number % 2 === 0) {
        alert(true);
    } else {
        alert(false);
    }
}

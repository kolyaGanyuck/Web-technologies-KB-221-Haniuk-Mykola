let arr = [];
let oddArr = [];
let evenArr = [];
for (let i = 0; i < 20; i++) {
    arr.push(i);
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    } else{
        oddArr.push(arr[i]);
    }
        }
document.write(arr + "<br>");

document.write(evenArr + "<br>");
document.write(oddArr);
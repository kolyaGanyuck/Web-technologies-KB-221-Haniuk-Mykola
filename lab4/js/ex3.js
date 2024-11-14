function swapValues(){
    const value1 = document.getElementById("firstField");
    const value2 = document.getElementById("secondField");

    let temp = value1.value;
    value1.value = value2.value;
    value2.value = temp;
    alert(value1.value +"  " +value2.value)
}
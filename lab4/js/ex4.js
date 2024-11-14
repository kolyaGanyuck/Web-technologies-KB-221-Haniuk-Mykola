function change() {
    let element = document.getElementById("button");
    if (element.textContent === "Click") {
        element.textContent = "Clicked";
    } else {
        element.textContent = "Click";
    }
}

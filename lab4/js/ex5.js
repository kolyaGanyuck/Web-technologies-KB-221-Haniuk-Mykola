function changeBlock() {
    let block = document.getElementById("block");
    block.style.height = "200px";
    block.style.width = "200px";
    block.style.backgroundColor = "magenta";
    block.style.textAlign = "center";
}

function changeColour() {
    let block = document.getElementById("block");
    block.style.backgroundColor = "green";
}

function addSome(){
    let block = document.getElementById("block");
    block.textContent = "1213";
    block.style.display = "flex";
    block.style.textAlign = "center"
    block.style.alignItems = "center";
    block.style.justifyContent = "center";
}
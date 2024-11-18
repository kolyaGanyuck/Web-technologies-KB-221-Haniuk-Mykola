function fillTable() {
    const table = document.getElementById("table")
    for (let i = 0; i < 5; i++) {
        const row = table.insertRow()
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell()
            cell.textContent = `${i + 1} : ${j + 1}`;
        }
    }
}
function selectMainDiagonal() {

const table = document.getElementById("table")
    const tableRows = table.rows;
for (let i = 0; i < 5; i++) {
    tableRows[i].cells[i].classList.add("highlight"); // Виділення комірок по діагоналі
}
}
function selectMinorDiagonal() {
    const table = document.getElementById('table')
    const tableRows = table.rows;

    for (let i = 0; i < 5; i++) {
        tableRows[i].cells[4 - i].classList.add("highlight");
    }
}



function getCurrentTime() {
    const number = new Date();
    const hours = number.getHours();
    const minutes = number.getMinutes();
    const seconds = number.getSeconds();
    const elementById = document.getElementById("time-block");
    elementById.textContent = hours + ':' + minutes + ':' + seconds;
    getCurrentTime()
}

setInterval(() => {
    getCurrentTime()
}, 1000);

const minuteEl = document.querySelector(".minute");
const hourEl = document.querySelector(".hour");
const secondEl = document.querySelector(".second");

function updateTime () {
    const date = new Date();
    setTimeout(updateTime, 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDeg = (hours / 12) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

// setInterval(updateTime, 1000);
updateTime();
const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#minutes");
const secEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() =>{
        updateClock();
    },1000);
}

updateClock();
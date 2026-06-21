// const h = document.querySelector(".hours");
// const m = document.querySelector(".minutes");
// const s = document.querySelector(".seconds");
// const p = document.querySelector("p");
// function updateClock(){
//     const currentDate = new Date();
//     setTimeout(updateClock, 1000);
//     const hour = currentDate.getHours();
//     const minute = currentDate.getMinutes();
//     const second = currentDate.getSeconds();
//     const hourDeg = (hour / 12) * 360;
//     h.style.transform = `rotate(${hourDeg}deg)`;
//     const minuteDeg = (minute / 60) * 360;
//     m.style.transform = `rotate(${minuteDeg}deg)`;
//     const secondDeg = (second / 60) * 360;
//     s.style.transform = `rotate(${secondDeg}deg)`;
//     p.innerText = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
// }
// updateClock();

const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

function updateClock(){
    setTimeout(updateClock, 1000);
    const currentDate = new Date();
    const h = currentDate.getHours();
    const hourDeg = (h / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const m = currentDate.getMinutes();
    const minuteDeg = (m / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const s = currentDate.getSeconds();
    const secondDeg = (s / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
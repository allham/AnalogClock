const h = document.querySelector(".hours");
const m = document.querySelector(".minutes");
const s = document.querySelector(".seconds");
const p = document.querySelector("p");
function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    p.innerText = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
}
updateClock();
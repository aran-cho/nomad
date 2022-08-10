const clockTitle = document.querySelector(".js-clock");

function getClock(){
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, '0'); 
     clockTitle.innerText = `170d 07h 44m ${seconds}s`;
}
getClock();
setInterval(getClock, 1000);


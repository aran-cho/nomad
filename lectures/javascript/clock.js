const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0'); 
    // padStart(2, '0') 1자리수를 앞에 0을 붙여 2자리로 맞추기
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0'); 
     clock.innerText = `${hours}:${minutes}:${seconds}`;
    // console.log(` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

getClock();
//getClock();없애면 00보이고 바로 시간 시작
setInterval(getClock, 1000); //5초마다 실행, 실시간으로 보이게 하는거



// 화면에 시계보이기
// const clock = document.querySelector("h2#clock");

// function getClock(){
//     const date = new Date();
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }

// getClock();
// //getClock();없애면 00보이고 바로 시간 시작
// setInterval(getClock, 1000); //5초마다 실행


  


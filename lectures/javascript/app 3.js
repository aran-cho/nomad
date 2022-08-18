// const title =document.getElementById("title");

// // console.log(title);
// // console.dir(title);

// title.innerText = "got you!";

// console.log(title.id);
// console.log(title.className);
// console.log(title);




// const title = document.getElementByTagName("h1");
//모든 h1을 호출

// const title = document.querySelector(".hello h1");
//단하나의 element 호출 가능
//내가 원하는 h1을 호출 가능
//첫번째 elemet만 호출

// const title = document.querySelectorAll(".hello h1");
//모든 element 호출 가능


// const title = document.querySelectorAll(".hello:first-child");
// console.log(title);

//3-7
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitlClick(){
    h1.classList.toggle('clicked');
    // toggle => classList에 clicked 가 있다면 제거
    // 없다면 추가(토큰이 존재하면 제거 존재하지않으면 추가)
}

h1.handleTitlClick('click', handleTitlClick);





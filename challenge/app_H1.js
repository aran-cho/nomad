const numForm = document.querySelector("#num_form");
const inputN1 = document.querySelector("#n1");
const inputN2 = document.querySelector("#n2");
const p = document.querySelector("p");
const btn = document.querySelector("button");

numForm.addEventListener("submit", numberSubmit);
function numberSubmit(e) {
  console.log(e);
  e.preventDefault();
  const num1 = parseInt(inputN1.value);
  const num2 = parseInt(inputN2.value);
  const randomNum = Math.ceil(Math.random() * num1);

  btn.addEventListener('click', function(){
    if(num2 < num1){
        
    }else{
        return
    };
    if (num2 == randomNum) { 
    //숫자가 다르면 you lost 숫자가 같으면 you win
        p.innerText = `you chose : ${num2}, the machine chose : ${randomNum}
         you won!`;
    }
    else {
        p.innerText =`you chose : ${num2}, the machine chose : ${randomNum} 
        you lost!`;
    }
  });

};


//submit : 값을 저장(초기화x)

// function randomN (){
//     let randomNum = Math.ceil(Math.random()*(inputN1.value));
// }

// btn.addEventListener('click', randomN);
//최종출력

// $('#txt').text(`you chose : ${num2}, the machine chose : ${num1}</p> you lost!`);
// console.log(num1, num2);

// function numberSubmit(e){
//     e.preventDefault();

//     const btn = document.querySelector('button');
//     function(){
//         const num1 = inputN1.value;
//         const num2 = inputN2.value;
//         $('#txt').text(`you chose : ${num2}, the machine chose : ${num1}</p> you lost!`);
//         console.log(num1, num2);
//     };

// }
// numForm.addEventListener("submit", numberSubmit);

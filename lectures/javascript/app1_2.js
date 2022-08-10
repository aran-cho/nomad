// alert("hi");

//2-2 계산기
// const a = 5;
// const b = 2;
// const myName = "aran";
//const veryLongVariavleName = 0;

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello "+ myName);

//2-3 let 사용(const와 let 차이)
// const a = 5;
// const b = 2;
// let myName = "aran";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello "+ myName);

// myName = "aran cho";
// console.log("hello "+ myName);
//const : 변하지 않는 변수를 선언할때 사용
//let : 바뀔 수 있는 변수를 선언할때 사용(=변수의 업데이트 가능)
//기본적으로 const를 사용하고, 때에 따라서 let을 사용

//2-4 Booleans
// const amIFat = null;
// let something;
// console.log(something);
//null : 값이 아무것도 없다는것(아무것도 없는 상태로 채워지는것), 할당은 되어있음
//undefined: 공간은 있는데(메모리는 있음) 값이 들어가지지 않은 상태 = 할당만 한 상태
//true(켜져있음), false(꺼져있음), null(비어있음), undefined(메모리있고 값이 없음) :타입

//2-5 Arrays
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
//--->
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// // const nonsense = [1,2,"hello",false, null, true, undefined]; 숫자, 문자열, 불런 다 가능

// //Get Item from Array
// console.log(daysOfWeek[5]);

// //Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);
// //array : 값을 리스트로 정리하는 것


//2-6 objects
//목적: 데이터를 가능한 최선으로 정리하는것

// const player = [ "aran", 1212, false, "little bit"] 
//player의 특성을 하나로 묶으려는데 array 로 할 경우 1212, flase 등이 무슨의미인지 알려주지 않음(주석을 달지 않는 이상)

//object 사용
const player ={
    name : "aran",
    points: 10, 
    fat: false,
};
//player의 특성(property) name, points, fat을 설정

console.log(player);
console.log(player.name);
//==console.log(player["name"]);

console.log(player);
player.fat = true;
console.log(player);
//const는 변경 불가능 object안의 특성을 변경하는건 가능(업데이트 가능)

player.lastName = "potato";
console.log(player);
player.points = player.points+15;
console.log(player.points);
//object에 추가가능

//요약: object는 특성(property)을 가진 데이터를 저장하도록 해줌 





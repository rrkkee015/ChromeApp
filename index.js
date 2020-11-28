// alert('Hello World!');
// console.log('Hello World!');

// Variable => 변경되거나 변경될 수 있는 것

// const daysOfWeek = ["MON", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// daysOfWeek[0] = '1'; // 이건 된다. 상수라고 Array 값을 못 바꾸는건 아님

// console.log(daysOfWeek);

// const info = {
//   name: 'DongHun',
//   age: 28,
//   favMovies: ["Oldboy", "Along the gods"],
//   favFood: [
//     {
//       name: "Kimchi",
//       fatty: false
//     },
//     {
//       name: "burger",
//       fatty: true
//     }
//   ]
// }

// info.name = 'Han'; // 이건 된다. 상수라고 Object 값을 못 바꾸는건 아니다.

// console.log(info.name, info.age);

// function sayHello(name, age) {
//   console.log('Hello!', name, " you have ", age, " years of age.");
//   console.log(`Hello! ${name} you have ${age} years old.`);
//   return `Hello ${name} you are ${age} years old.`;
// }

// const greeDongHun = sayHello("DongHun", 28);

// console.log(greeDongHun);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   }
// }

// const plus = calculator.plus(5, 5);
// console.log(plus);

const title = document.getElementById("title");
// const title = document.querySelector("#title");
// const title = document.querySelector(".title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// console.log(title);

// document.title = "My Site";

// Document Object Model (DOM)
// JavaScript에서 html을 객체로 바꾸어서 변경할 수 있다.

// function handleResize(event) {
//   // event는 이벤트를 다룰 함수를 만들 때 마다, 객체를 들고온다.
//   console.log(event);
//   console.log("I have been resiezed");
// }

// function handle(event) {
//   title.style.colr = "red";
// }

// window.addEventListener("resize", handleResize); // handleResize()가 아니다. handleResize()를 하면 이벤트를 대기 하지 않고 바로 즉시 호출해버린다.
// title.addEventListener("click", handle);


// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  // const currentClass = title.className;
  // if (currentClass !== CLICKED_CLASS) {
  if (!hasClass) {
    // title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
  } else {
    // title.className = "";
    title.classList.remove(CLICKED_CLASS);
  }
}

const CLICKED_CLASS = "clicked";

function init() {
  // title.style.color = BASE_COLOR;
  // title.addEventListener("mouseenter", handleClick);
  title.addEventListener("click", handleClick);
}

init();
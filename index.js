// alert('Hello World!');
// console.log('Hello World!');

// Variable => 변경되거나 변경될 수 있는 것

const daysOfWeek = ["MON", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

daysOfWeek[0] = '1'; // 이건 된다. 상수라고 Array 값을 못 바꾸는건 아님

console.log(daysOfWeek);

const info = {
  name: 'DongHun',
  age: 28,
  favMovies: ["Oldboy", "Along the gods"],
  favFood: [
    {
      name: "Kimchi",
      fatty: false
    },
    {
      name: "burger",
      fatty: true
    }
  ]
}

info.name = 'Han'; // 이건 된다. 상수라고 Object 값을 못 바꾸는건 아니다.

console.log(info.name, info.age);
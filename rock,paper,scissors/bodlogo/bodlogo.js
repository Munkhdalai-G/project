// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 20 },
//   { name: "Jack", age: 18 },
// ];
// const result = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });
// console.log(result);
// const nums = [-5, 3, -1, 7, 0];
// const result = nums.filter((num) => {
//   if (num > 0) return true;
// });
// console.log(result);
// const words = ["hi", "hello", "yo", "world"];
// const result = words.filter((word) => {
//   if (word.length > 3) return true;
// });
// console.log(result);
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .filter((number) => {
//     if (number % 2 === 1) return true;
//   })
//   .map((number) => number * 2);
// console.log(result);

// const students = [
//   { firstName: "John", lastName: "Doe", passed: true },
//   { firstName: "Jane", lastName: "Smith", passed: false },
//   { firstName: "Alice", lastName: "Jones", passed: true },
// ];
// const result = students
//   .filter((student) => {
//     if (student.passed === true) return true;
//   })
//   .map((daGa) => {
//     return daGa.firstName.toUpperCase();
//   });

// console.log(result);
const students = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];
let top3Students = [{ name: "", score: 0 }];
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  if (top3Students[0].score < student.score) {
    top3Students[1] = top3Students[0];
    top3Students[0] = student;
  } else {
    top3Students[1].score < student.score;
    top3Students[2] = top3Students[1];
    top3Students[1] = student;
  }
}
console.log(top3Students);

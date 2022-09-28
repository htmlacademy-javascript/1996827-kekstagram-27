// Test ESLint
// function getSum (a, b) {
//   const description = "сумма двух чисел равна";
//   const sum = a + b;
//   return description+''+sum;
// }
// getSum (1, 4);
// npm run lint
// npm run lint -- --fix
function getSum (a, b) {
  const description = 'сумма двух чисел равна';
  const sum = a + b;
  return `${description}${sum}`;
}
getSum (1, 4);
// npm run lint
// npm run lint -- --fix

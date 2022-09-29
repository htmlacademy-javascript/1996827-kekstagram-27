// Test ESLint
// function getSum (a, b) {
//   const description = "сумма двух чисел равна";
//   const sum = a + b;
//   return description+''+sum;
// }
// getSum (1, 4);
// npm run lint
// npm run lint -- --fix
/**
 * @param {number} a
 * @param {number} b
 */
function getSum (a, b) {
  const description = 'сумма двух чисел равна';
  const sum = a + String(b);
  return `${description}${sum}`;
}
getSum (1, 4);
// npm run lint
// npm run lint -- --fix

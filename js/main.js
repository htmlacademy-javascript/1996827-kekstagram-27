/**
 *
 * @param {*} min
 * @param {*} max
 */
// Получение случайного целого числа в заданном интервале, включительно
function getRandomInt(min, max) {
  // isNaN определяет, является ли передаваемое значение NaN (англ. Not-a-Number, "не число") и возвращает логическое значение.
  // Метод возвращает true, если передаваемое значение NaN и его тип Number, в противном случае возвращаемое значение false.
  //
  // ПОКА 1 пустая строка или 2 null или 2 введено НЕ ЧИСЛО или 3 отрицательное число или 4 max меньше или равно min
  // пока одно из условий будет правдивым, цикл будет возвращать Nan
  while (min === '' || min === null || isNaN(min) || min < 0 || max === '' || max === null || isNaN(max) || max < 0 || max <= min) {
    return NaN;
  }

  // Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
  min = Math.ceil(min);
  // Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
  max = Math.floor(max);
  //Максимум и минимум включаются
  // 12	Сложение (+) / Вычитание (-) :	слева направо
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // return Math.floor(Math.random() * (max - min)); // 4 - 1 = 3 - диапазон чисел от 0 до 3
}
console.log(getRandomInt(2, 6));

/**
 * Вернет целое положительное в диапазоне `min`, `max`
 * @param {number} min
 * @param {number} max
 */
function getRandomInt2(min, max) {
  const range = [min, max];

  if (!range.every(Number.isInteger)) {
    throw new Error(`Нецелочисленный диапазон: [${range}]`);
  }

  if (min < 0 || max < 0) {
    throw new Error(`Неподдерживаемый диапазон: [${range}]`);
  }

  if (min > max) {
    // Перевернуть
    // Без деструктурирующего присваивания
    [min, max] = [max, min];
    // console.log(min, max);
    // как вывести с помощью return?
     return [min, max];
  }

  return (max - min) * Math.random() + min;
 }

getRandomInt2(4, 3);
// console.log(getRandomInt2(4, 3));
//  Number.isInteger()


const {log, trace} = console;
trace (
  getRandomInt2(3, 5)
  );


/**
 * Вернет целое положительное в диапазоне `min`, `max`
 * @param {number} min
 * @param {number} max
 */
function randomIntInRange(min, max) {
  const range = [min, max];

  if (!range.every(Number.isInteger)) {
    throw new Error(`Нецелочисленный диапазон: [${range}]`);
  }

  if (min < 0 || max < 0) {
    throw new Error(`Неподдерживаемый диапазон: [${range}]`);
  }

  return Math.round((max - min) * Math.random() + min);
}

randomIntInRange(4, 3);

/**
 * Проверит максимальную длинну строки
 * @param {string} value
 * @param {number} maxLength По умолчанию 100
 */
function validateMaxLength(value, maxLength = 100) {
  return value.length <= maxLength;
}

console.assert(validateMaxLength('ererer', 1), 'Превышает длинну');

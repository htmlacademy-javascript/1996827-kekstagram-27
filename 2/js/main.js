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
 * Проверит максимальную длину строки
 * @param {string} value
 * @param {number} maxLength По умолчанию 100
 */
function validateMaxLength(value, maxLength = 100) {
  return value.length <= maxLength;
}

validateMaxLength('ererer', 1);


import {ARRAY_MAX_COUNT} from './data.js';

/**
 * Вернет целое положительное в диапазоне `min`, `max`
 * @param {number} min
 * @param {number} max
 */
export function randomIntInRange(min, max) {
  const range = [min, max];

  if (!range.every(Number.isInteger)) {
    throw new Error(`Нецелочисленный диапазон: [${range}]`);
  }

  if (min < 0 || max < 0 || min > max) {
    throw new Error(`Неподдерживаемый диапазон: [${range}]`);
  }

  return Math.round((max - min) * Math.random() + min);
}

/**
 * @template Item
 * @param {Item[]} items
 */
export const getRandomArrayItem = (items) => {
  const lastIndex = Math.max(0, items.length - 1);
  const index = randomIntInRange(0, lastIndex);

  return items[index];
};

const generatedIds = [];
export const generateId = () => {
  // while (generatedIds.length < ARRAY_MAX_COUNT) {
  while (generatedIds.length < ARRAY_MAX_COUNT) {
    const id = randomIntInRange(1, ARRAY_MAX_COUNT);
    // вставляем элемент если нет в массиве
    if (!generatedIds.includes(id)) {
      generatedIds.push(id);

      return id;
    }
  }
};

// console.log(`test  generateId(): ${generateId()}`);

/**
 * Проверит максимальную длину строки
 * @param {string} value
 * @param {number} maxLength По умолчанию 100
 */
function validateMaxLength(value, maxLength = 100) {
  return value.length <= maxLength;
}

validateMaxLength('ererer', 1);

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

  if (min < 0 || max < 0 || min > max) {
    throw new Error(`Неподдерживаемый диапазон: [${range}]`);
  }

  return Math.round((max - min) * Math.random() + min);
}

/**
 * Проверит максимальную длину строки
 * @param {string} value
 * @param {number} maxLength По умолчанию 100
 */
function validateMaxLength(value, maxLength = 100) {
  return value.length <= maxLength;
}

validateMaxLength('ererer', 1);

const ARRAY_MAX_COUNT = 25;

/**
 * @type {NumberRange}
 */
const COMMENTS_RANGE = [1, 25];

/**
 * @type {NumberRange}
 */
const LIKES_RANGE = [15, 200];

/**
 * @type {NumberRange}
 */
const AVATAR_RANGE = [1, 6];


const DESCRIPTIONS = [
  'описание 1',
  'описание 2',
  'описание 3',
  'описание 4',
];

const MESSAGES = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

/**
 * @template Item
 * @param {Item[]} items
 */
const getRandomArrayItem = (items) => {
  const lastIndex = Math.max(0, items.length - 1);
  const index = randomIntInRange(0, lastIndex);

  return items[index];
};

const generatedIds = [];

const generateId = () => {
  while (generatedIds.length < ARRAY_MAX_COUNT) {
    const id = randomIntInRange(1, ARRAY_MAX_COUNT);
    // вставляем элемент если нет в массиве
    if (!generatedIds.includes(id)) {
      generatedIds.push(id);

      return id;
    }
  }
};

/**
 * @returns {CommentState}
 */
const generateCommentState = () => ({
  id: generateId(),
  avatar: `img/avatar-${randomIntInRange(...AVATAR_RANGE)}.svg`,
  message: getRandomArrayItem(MESSAGES),
  name: getRandomArrayItem(NAMES),
});

/**
 * @param {number} length
 * @returns {CommentState[]}
 */
const generateCommentStates = (length) => Array.from({length}, generateCommentState);

/**
 * @returns {ImageState}
 */
const generateImageState = () => ({
  id: generateId(),
  url: `photos/${randomIntInRange(1, ARRAY_MAX_COUNT)}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: randomIntInRange(...LIKES_RANGE),
  comments: generateCommentStates(randomIntInRange(...COMMENTS_RANGE))
});

const generateImageStates = () => Array.from({length: ARRAY_MAX_COUNT}, generateImageState);

generateImageStates();

/**
 * @typedef ImageState
 * @prop {number} id
 * @prop {string} url
 * @prop {string} description
 * @prop {number} likes
 * @prop {CommentState[]} comments
 */

/**
 * @typedef CommentState
 * @prop {number} id
 * @prop {string} avatar
 * @prop {string} message
 * @prop {string} name
 */

/**
 * @typedef {[min: number, max: number]} NumberRange
 */

import {generateId, randomIntInRange, getRandomArrayItem} from './utils.js';

import {
  DESCRIPTIONS,
  LIKES_RANGE,
  COMMENTS_RANGE,
  AVATAR_RANGE,
  MESSAGES,
  NAMES
} from './data.js';

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
const generateImageState = (id) => ({
  id: generateId(),
  url: `photos/${id}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: randomIntInRange(...LIKES_RANGE),
  comments: generateCommentStates(randomIntInRange(...COMMENTS_RANGE))
});

const generateImageStates = (length = 25) =>
  Array.from({length}, (_, index) => generateImageState(index + 1));

export default generateImageStates;

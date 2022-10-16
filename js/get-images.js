import {randomIntInRange} from './utils.js';
import {getRandomArrayItem} from './utils.js';

import {ARRAY_MAX_COUNT} from './data.js';
import {DESCRIPTIONS} from './data.js';
import {LIKES_RANGE} from './data.js';
import {COMMENTS_RANGE} from './data.js';

import {generateCommentStates} from './get-comments.js';

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
 * @returns {ImageState}
 */
const generateImageState = () => ({
  // id: generateId(),
  id: randomIntInRange(1, ARRAY_MAX_COUNT),
  url: `photos/${randomIntInRange(1, ARRAY_MAX_COUNT)}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: randomIntInRange(...LIKES_RANGE),
  comments: generateCommentStates(randomIntInRange(...COMMENTS_RANGE))
});

export const generateImageStates = () => Array.from({length: ARRAY_MAX_COUNT}, generateImageState);

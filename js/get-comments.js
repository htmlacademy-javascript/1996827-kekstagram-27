import {generateId} from './utils.js';
import {randomIntInRange} from './utils.js';
import {getRandomArrayItem} from './utils.js';

import {AVATAR_RANGE} from './data.js';
import {MESSAGES} from './data.js';
import {NAMES} from './data.js';

/**
 * @typedef CommentState
 * @prop {number} id
 * @prop {string} avatar
 * @prop {string} message
 * @prop {string} name
 */

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
export const generateCommentStates = (length) => Array.from({length}, generateCommentState);

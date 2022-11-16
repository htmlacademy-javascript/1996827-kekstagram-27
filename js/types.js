/**
 * @typedef CommentState
 * @prop {number} id
 * @prop {string} avatar
 * @prop {string} message
 * @prop {string} name
 */

/**
 * @typedef ImageState
 * @prop {number} id
 * @prop {string} url
 * @prop {string} description
 * @prop {number} likes
 * @prop {CommentState[]} comments
 */

/**
 * @typedef ImageSortMenuItem
 * @prop {string} type
 * @prop {string} label
 */

/**
 * @typedef UploadEffectMenuItem
 * @prop {string} type
 * @prop {string} label
 */

/**
 * @typedef StatusMessageContent
 * @prop {string} type
 * @prop {string} title
 * @prop {string} [description]
 * @prop {string} action
 */

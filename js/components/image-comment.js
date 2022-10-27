import Component, {html} from './component.js';

export default class ImageComment extends Component {
  constructor() {
    super();
    this.classList.add('social__comments');
  }

  /**
   * @param {CommentState} comment
   */
  createCommentHtml(comment) {
    return html`
      <li class="social__comment">
        <img
            class="social__picture"
            src="${comment.avatar}"
            alt="${comment.name}"
            width="35" height="35">
        <p class="social__text">${comment.message}"</p>
      </li>
    `;
  }

  /**
 * @param {CommentState[]} comments
 */
  setContent(comments) {
    const commentsHtml = comments.map(this.createCommentHtml).join(' ');
    this.insertAdjacentHTML('beforeend', commentsHtml);
  }
}

customElements.define(String(ImageComment), ImageComment);

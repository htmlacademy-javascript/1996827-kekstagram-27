import Component, {html} from './component.js';

export default class ImageDiscussion extends Component {
  constructor() {
    super();

    this.classList.add('social');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <!-- Комментарии к изображению -->
      <div class="social__comment-count">5 из <span class="comments-count">125</span> комментариев</div>

      <ul class="social__comments"></ul>

      <!-- Кнопка для загрузки новой порции комментариев -->
      <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

      <!-- Форма для отправки комментария -->
      <div class="social__footer">
        <img class="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35">
        <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
        <button type="button" class="social__footer-btn" name="button">Отправить</button>
      </div>
    `;
  }

  /**
   * @param {CommentState} comment
   */
  createCommentHtml(comment) {
    return html`
      <li class="social__comment">
        <img class="social__picture" src="${comment.avatar}" alt="${comment.name}." width="35" height="35">
        <p class="social__text">${comment.message}</p>
      </li>
    `;
  }

  /**
   * @param {CommentState[]} comments
   */
  setContent(comments) {
    const commentsHtml = comments.map(this.createCommentHtml).join(' ');

    this.querySelector('ul').insertAdjacentHTML('beforeend', commentsHtml);
  }
}

customElements.define(String(ImageDiscussion), ImageDiscussion);

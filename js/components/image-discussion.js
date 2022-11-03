import Component, {html} from './component.js';

export default class ImageDiscussion extends Component {
  constructor() {
    super();

    this.classList.add('social');

    /**
     * @type {CommentState[]}
     */
    this.comments = [];
    this.commentsTotal = 0;
    this.commentsLimit = 5;

    this.addEventListener('click', this.handleClick);
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <!-- Комментарии к изображению -->
      <div class="social__comment-count">
        <span class="comments-count">0</span> из
        <span class="comments-total">0</span> комментариев
      </div>

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
    this.comments = [...comments];
    this.commentsTotal = comments.length;

    this.querySelector('ul').innerHTML = '';
    this.showMore();
  }

  showMore() {
    const comments = this.comments.splice(0, this.commentsLimit);
    const commentsHtml = comments.map(this.createCommentHtml).join(' ');

    this.querySelector('ul').insertAdjacentHTML('beforeend', commentsHtml);

    this.querySelector('.comments-count').textContent = String(this.commentsTotal - this.comments.length);
    this.querySelector('.comments-total').textContent = String(this.commentsTotal);

    this.querySelector('.comments-loader').classList.toggle('hidden', !this.comments.length);
  }

  /**
   * @param {MouseEvent & {target: Element}} event
   */
  handleClick(event) {
    if (event.target.closest('.comments-loader')) {
      this.showMore();
    }

  }
}

customElements.define(String(ImageDiscussion), ImageDiscussion);



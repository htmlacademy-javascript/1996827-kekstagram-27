import Dialog, {html} from './dialog.js';
import ImageDiscussion from './image-discussion.js';


export default class ImageDialog extends Dialog {
  constructor() {
    super();

    this.classList.add('big-picture');

    /**
     * @type {ImageDiscussion}
     */
    this.discussion = this.querySelector(String(ImageDiscussion));
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div class="big-picture__preview">

        <!-- Просмотр изображения -->
        <div class="big-picture__img">
          <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600">
        </div>

        <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
        <${ImageDiscussion} class="big-picture__social">
          <div class="social__header">
            <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
            <p class="social__caption"></p>
            <p class="social__likes">Нравится <span class="likes-count">0</span></p>
          </div>
        </${ImageDiscussion}>

        <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
        <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
      </div>
    `;
  }


  /**
   *
   * @param {ImageState} image
   */
  setContent(image) {
    this.querySelector('img').src = image.url;
    this.querySelector('.social__caption').textContent = image.description;
    this.querySelector('.likes-count').textContent = String(image.likes);
    this.discussion.setContent(image.comments);
  }
}


customElements.define(String(ImageDialog), ImageDialog);

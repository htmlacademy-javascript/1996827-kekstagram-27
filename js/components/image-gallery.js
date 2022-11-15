import Component, {html} from './component.js';
import UploadArea from './upload-area.js';


export default class ImageGallery extends Component {
  constructor() {
    super();

    this.classList.add('pictures');

    /**
     * @type {UploadArea}
     */
    this.upload = this.querySelector(String(UploadArea));

    /**
     * @type {ImageState[]}
     */
    this.images = [];

    this.addEventListener('click', this.handleClick);
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <h2 class="pictures__title  visually-hidden">Фотографии других пользователей</h2>

      <!-- Поле для загрузки нового изображения на сайт -->
      <${UploadArea}></${UploadArea}>

      <!-- Здесь будут изображения других пользователей -->
    `;
  }


  /**
   * @param {ImageState} image
   */
  createImageHtml(image) {
    return html`
      <a href="#" class="picture" id="picture-${image.id}">
        <img class="picture__img" src="${image.url}" width="182" height="182" alt="Случайная фотография">
        <p class="picture__info">
          <span class="picture__comments">${image.comments.length}</span>
          <span class="picture__likes">${image.likes}</span>
        </p>
      </a>
    `;
  }


  /**
   * @param {ImageState[]} images
   */
  setContent(images) {
    const imagesHtml = images.map(this.createImageHtml).join(' ');

    this.querySelectorAll('.picture').forEach((item) => item.remove());
    this.insertAdjacentHTML('beforeend', imagesHtml);

    this.images = [...images];
  }


  /**
   * @param {MouseEvent & {target: Element}} event
   */
  handleClick(event) {
    const target = event.target.closest('.picture');

    if (target) {
      event.preventDefault();

      const imageId = Number(target.id.replace('picture-', ''));
      const detail = this.images.find((image) => image.id === imageId);

      this.dispatchEvent(new CustomEvent('itemclick', {detail}));
    }
  }
}


customElements.define(String(ImageGallery), ImageGallery);

import Component, {html} from './component.js';
import UploadArea from './upload-area.js';


export default class ImageGallery extends Component {
  constructor() {
    super();
    this.classList.add('pictures');
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
      <a href="#" class="picture">
        <img class="picture__img" src="${image.url}" width="182" height="182" alt="Случайная фотография">
        <p class="picture__info">
          <span class="picture__comments"></span>
          <span class="picture__likes"></span>
        </p>
      </a>
    `;
  }

  /**
   * @param {ImageState[]} images
   */
  setContent(images) {
    const imagesHtml = images.map(this.createImageHtml).join(' ');

    this.insertAdjacentHTML('beforeend', imagesHtml);
  }
}

customElements.define(String(ImageGallery), ImageGallery);

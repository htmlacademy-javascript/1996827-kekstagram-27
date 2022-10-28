import Component, {html} from './component.js';

export default class UploadPreview extends Component {
  constructor() {
    super();

    this.image = this.querySelector('img');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии">
    `;
  }
}

customElements.define(String(UploadPreview), UploadPreview);

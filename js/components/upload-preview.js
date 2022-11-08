import Component, {html} from './component.js';
import {UploadEffectType, UploadEffectCssFilter} from '../enums.js';
import {findKey} from '../utils.js';


export default class UploadPreview extends Component {
  constructor() {
    super();

    this.image = this.querySelector('img');

    this.currentFilter = UploadEffectType.NONE;
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии">
    `;
  }

  /**
   * @param {number} percent
   */
  setScale(percent) {
    this.image.style.transform = `scale(${percent / 100})`;
  }

  /**
   * @param {string} type
   */
  setEffect(type) {
    this.image.className = `effects__preview--${type}`;

    this.currentFilter = UploadEffectCssFilter[findKey(UploadEffectType, type)];
  }

  /**
   * @param {number} level
   */
  setEffectLevel(level) {
    this.image.style.filter = this.currentFilter.replace('0', String(level));
  }
}

customElements.define(String(UploadPreview), UploadPreview);

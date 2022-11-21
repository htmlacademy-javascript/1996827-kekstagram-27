import Component, {html} from './component.js';
import {UploadEffectType} from '../enums.js';
import {uploadEffectLabelMap} from '../maps.js';


const items = Object.entries(uploadEffectLabelMap).map(([type, label]) => ({type, label}));


export default class UploadEffectMenu extends Component {
  constructor() {
    super();

    this.classList.add('effects');

    this.querySelector('ul').innerHTML = items.map(this.createItemHtml).join('');
    this.reset();
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <ul class="effects__list"></ul>
    `;
  }


  /**
   * @param {UploadEffectMenuItem} item
   */
  createItemHtml(item) {
    return html`
      <li class="effects__item">
        <input
          class="effects__radio  visually-hidden"
          id="effect-${item.type}"
          type="radio"
          name="effect"
          value="${item.type}">
        <label class="effects__label" for="effect-${item.type}">
          <span class="effects__preview  effects__preview--${item.type}">
            Превью эффекта ${item.label}
          </span>
          ${item.label}
        </label>
      </li>
    `;
  }


  getSelectedValue() {
    /**
     * @type {HTMLInputElement}
     */
    const radio = this.querySelector(':checked');

    return radio?.value;
  }


  reset() {
    /**
     * @type {HTMLInputElement}
     */
    const radio = this.querySelector(`#effect-${UploadEffectType.NONE}`);

    radio.checked = true;
    radio.dispatchEvent(new Event('change', {bubbles: true}));
  }


  /**
   * @param {string} url
   */
  setImageUrl(url) {
    this.querySelectorAll('span').forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  }
}


customElements.define(String(UploadEffectMenu), UploadEffectMenu);

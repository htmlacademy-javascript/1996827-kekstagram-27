import Component, {html} from './component.js';
import {UploadEffectLabel, UploadEffectType} from '../enums.js';

const items = Object.keys(UploadEffectType).map((key) => ({
  type: UploadEffectType[key],
  label: UploadEffectLabel[key]
}));

console.log(items);
console.log(Object.keys(UploadEffectType));

export default class UploadEffectMenu extends Component {
  constructor() {
    super();

    this.classList.add('effects');

    this.querySelector('ul').innerHTML = items.map(this.createItemHtml).join('');
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
}

customElements.define(String(UploadEffectMenu), UploadEffectMenu);

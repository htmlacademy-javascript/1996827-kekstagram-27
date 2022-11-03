import Component, {html} from './component.js';

export default class UploadScale extends Component {
  constructor() {
    super();

    this.classList.add('scale');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <button type="button" class="scale__control  scale__control--smaller">Уменьшить</button>
      <input type="text" class="scale__control  scale__control--value" value="55%" title="Image Scale" name="scale" readonly>
      <button type="button" class="scale__control  scale__control--bigger">Увеличить</button>
    `;
  }
}

customElements.define(String(UploadScale), UploadScale);

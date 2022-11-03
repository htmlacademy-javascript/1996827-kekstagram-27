import Component, {html} from './component.js';

export default class UploadEffectLevel extends Component {
  constructor() {
    super();

    this.classList.add('effect-level');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <input class="effect-level__value" type="number" step="any" name="effect-level" value="">
      <div class="effect-level__slider"></div>
    `;
  }
}

customElements.define(String(UploadEffectLevel), UploadEffectLevel);

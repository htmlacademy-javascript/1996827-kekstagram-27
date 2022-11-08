import Component, {html} from './component.js';

export default class UploadScale extends Component {
  constructor() {
    super();

    this.classList.add('scale');

    this.min = 25;
    this.max = 100;
    this.step = 25;
    this.output = this.querySelector('input');

    this.stepDown = this.querySelector('button');
    this.stepDown.addEventListener('click', this.handleStepDownClick.bind(this));

    this.stepUp = this.querySelector('button:last-of-type');
    this.stepUp.addEventListener('click', this.handleStepUpClick.bind(this));

    this.reset();
  }

  /**
   * @param {number} value
   */
  set value(value) {
    const rangeValue = Math.max(this.min, Math.min(value, this.max));

    this.output.value = `${rangeValue}%`;

    this.dispatchEvent(new CustomEvent('update'));
  }

  get value() {
    return Number.parseFloat(this.output.value);
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

  reset() {
    this.value = this.max;
  }

  handleStepDownClick() {
    this.value -= this.step;
  }

  handleStepUpClick() {
    this.value += this.step;
  }
}

customElements.define(String(UploadScale), UploadScale);

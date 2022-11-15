import {UploadEffectRange, UploadEffectType} from '../enums.js';
import {findKey} from '../utils.js';
import Component, {html} from './component.js';


/**
 * @param {string} type
 */
const createRangeOptions = (type) => {
  const range = UploadEffectRange[findKey(UploadEffectType, type)];
  const [min, max, step] = range;

  return {
    range: {min, max},
    start: max,
    step
  };
};

export default class UploadEffectLevel extends Component {
  constructor() {
    super();

    this.classList.add('effect-level');

    this.input = this.querySelector('input');

    // @ts-ignore
    this.slider = noUiSlider.create(this.querySelector('div'), {
      connect: 'lower',
      behaviour: 'snap',
      ...createRangeOptions(UploadEffectType.NONE)
    });

    this.slider.on('update', this.handleSliderUpdate.bind(this));
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

  /**
   * @return {number}
   */
  get() {
    return this.slider.get(true);
  }

  /**
   * @param {string} type
   */
  preset(type) {
    this.slider.updateOptions(createRangeOptions(type));

    this.display(type !== UploadEffectType.NONE);
  }

  handleSliderUpdate() {
    this.input.value = String(this.get());

    this.dispatchEvent(new CustomEvent('update'));
  }
}

customElements.define(String(UploadEffectLevel), UploadEffectLevel);


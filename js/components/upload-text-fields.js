import Component, {html} from './component.js';

/**
 * @param {string} name
 * @param {(...args: string[]) => boolean} validator
 */
const addValidator = (name, validator) =>
  // @ts-ignore
  Pristine.addValidator(name, validator, null, 1, true);

/**
 * @param {string} value
 */
const list = (value) => value.split(' ').filter(Boolean);

addValidator('item-pattern', (value, pattern, flag) => {
  const items = list(value);
  // const [pattern, flag] = pattern.split(',');
  const regexp = RegExp(pattern, flag);
  // debugger;
  // console.log(items);

  return items.every((item) => regexp.test(item));
});

// TODO: один и тот же хэш-тег не может быть использован дважды;
// TODO: максимальная длина одного хэш-тега 20 символов, включая решётку;
// TODO: нельзя указать больше пяти хэш-тегов;

// TODO: кнопка масштаба;

// TODO: слайдер эффектов


export default class UploadTextFields extends Component {
  constructor() {
    super();

    this.classList.add('text');
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="text__field">
        <input
          class="text__hashtags"
          name="hashtags"

          data-pristine-item-pattern="^#[a-zа-яё0-9]+$,i"
          data-pristine-item-pattern-message="С начала #, потом буквы / цифры"

          placeholder="#ХэшТег">
      </div>
      <div class="text__field">
        <textarea
          class="text__description"
          name="description"
          data-pristine-maxlength ="5"
          data-pristine-maxlength-message ="Не более \${1} символов"
          placeholder="Ваш комментарий..."
        ></textarea>
      </div>
    `;
  }
}

customElements.define(String(UploadTextFields), UploadTextFields);

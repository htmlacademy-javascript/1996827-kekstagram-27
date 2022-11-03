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

addValidator('item-pattern', (value, pattern, flags) => {
  const items = list(value);
  const regexp = new RegExp(pattern, flags);

  return items.every((item) => regexp.test(item));
});

addValidator('item-unique', (value) => {
  const items = list(value).map((item) => item.toLowerCase());

  return new Set(items).size === items.length;
});

addValidator('item-limit', (value, limit) => {
  const items = list(value);

  return items.length <= Number(limit);
});

addValidator('item-maxlength', (value, maxlength) => {
  const items = list(value);

  return items.every((item) => item.length <= Number(maxlength));
});

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

          data-pristine-item-unique
          data-pristine-item-unique-message="Нельзя повторяться"

          data-pristine-item-limit="5"
          data-pristine-item-limit-message="Не более \${1} тэгов"

          data-pristine-item-maxlength="20"
          data-pristine-item-maxlength-message="Не больше \${1} символов на #ХэшТег"

          placeholder="#ХэшТег">
      </div>
      <div class="text__field">
        <textarea
          class="text__description"
          name="description"
          data-pristine-maxlength ="140"
          data-pristine-maxlength-message ="Не более \${1} символов"
          placeholder="Ваш комментарий..."
        ></textarea>
      </div>
    `;
  }
}

customElements.define(String(UploadTextFields), UploadTextFields);

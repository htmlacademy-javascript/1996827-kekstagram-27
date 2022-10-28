import Component, {html} from './component.js';
import UploadDialog from './upload-dialog.js';


export default class UploadArea extends Component {
  constructor() {
    super();

    this.classList.add('img-upload');

    this.form = this.querySelector('form');

    // @ts-ignore
    this.validator = new Pristine(this.form, {
      classTo: 'text__field',
      errorTextParent: 'text__field',
      errorTextClass: 'text__error'
    });

    /**
     * @type {UploadDialog}
     */
    this.dialog = this.querySelector(String(UploadDialog));

    this.addEventListener('change', this.handleChange);
    this.addEventListener('close', this.handleClose, {capture: true});
    this.addEventListener('submit', this.handleSubmit);
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="img-upload__wrapper">
        <h2 class="img-upload__title  visually-hidden">Загрузка фотографии</h2>
        <form
          class="img-upload__form"
          id="upload-select-image"
          method="post"
          enctype="multipart/form-data"
          autocomplete="off"
          action="https://27.javascript.pages.academy/kekstagram">

          <!-- Изначальное состояние поля для загрузки изображения -->
          <fieldset class="img-upload__start">
            <input type="file" id="upload-file" class="img-upload__input  visually-hidden" name="filename" required accept="image/*">
            <label for="upload-file" class="img-upload__label  img-upload__control">Загрузить</label>
          </fieldset>

          <!-- Форма редактирования изображения -->
          <${UploadDialog} class="img-upload__overlay"> </${UploadDialog}>
        </form>
      </div>
    `;
  }

  /**
   * @param {Event & {target: HTMLInputElement}} event
   */
  handleChange(event) {
    if (event.target === this.form.filename) {
      // TODO: подстановка изображений
      this.dialog.display(true);
    }
  }

  handleClose() {
    this.form.reset();
  }

  /**
   * @param {SubmitEvent} event
   */
  handleSubmit(event) {
    event.preventDefault();

    if (!this.validator.validate()) {
      const [invalid] = this.validator.getErrors();

      invalid.input.focus();

      return;
    }

    // триггер события formdate
    new FormData(this.form);
  }
}

customElements.define(String(UploadArea), UploadArea);

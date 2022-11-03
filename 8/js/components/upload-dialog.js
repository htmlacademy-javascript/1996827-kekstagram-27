import Dialog, {html} from './dialog.js';
import UploadScale from './upload-scale.js';
import UploadPreview from './upload-preview.js';
import UploadEffectLevel from './upload-effect-level.js';
import UploadEffectMenu from './upload-effect-menu.js';
import UploadTextFields from './upload-text-fields.js';


export default class UploadDialog extends Dialog {
  constructor() {
    super();

    // this.classList.add('');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="img-upload__wrapper">
        <div class="img-upload__preview-container">

          <!-- Изменение размера изображения -->
          <${UploadScale} class="img-upload__scale"> </${UploadScale}>

          <!-- Предварительный просмотр изображения -->
          <${UploadPreview} class="img-upload__preview"> </${UploadPreview}>

          <!-- Изменение глубины эффекта, накладываемого на изображение -->
          <${UploadEffectLevel} class="img-upload__effect-level"> </${UploadEffectLevel}>

          <!-- Кнопка для закрытия формы редактирования изображения -->
          <button type="reset" class="img-upload__cancel  cancel" id="upload-cancel">Закрыть</button>
        </div>

        <!-- Наложение эффекта на изображение -->
        <${UploadEffectMenu} class="img-upload__effects "> </${UploadEffectMenu}>

        <!-- Добавление хэш-тегов и комментария к изображению -->
        <${UploadTextFields} class="img-upload__text"> </${UploadTextFields}>

        <!-- Кнопка для отправки данных на сервер -->
        <button type="submit" class="img-upload__submit" id="upload-submit">Опубликовать</button>
      </div>
    `;
  }
}

customElements.define(String(UploadDialog), UploadDialog);

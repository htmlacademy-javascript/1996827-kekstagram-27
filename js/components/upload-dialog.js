import Dialog, {html} from './dialog.js';
import UploadScale from './upload-scale.js';
import UploadPreview from './upload-preview.js';
import UploadEffectLevel from './upload-effect-level.js';
import UploadEffectMenu from './upload-effect-menu.js';
import UploadTextFields from './upload-text-fields.js';


export default class UploadDialog extends Dialog {
  constructor() {
    super();

    /**
     * @type {UploadScale}
     */
    this.scale = this.querySelector(String(UploadScale));
    this.scale.addEventListener('update', this.handleScaleUpdate.bind(this));

    /**
     * @type {UploadPreview}
     */
    this.preview = this.querySelector(String(UploadPreview));

    /**
     * @type {UploadEffectLevel}
     */
    this.effectLevel = this.querySelector(String(UploadEffectLevel));
    this.effectLevel.addEventListener('update', this.handleEffectLevelUpdate.bind(this));

    /**
     * @type {UploadEffectMenu}
     */
    this.effectMenu = this.querySelector(String(UploadEffectMenu));
    this.effectMenu.addEventListener('change', this.handleEffectMenuChange.bind(this));

    /**
     * @type {HTMLButtonElement}
     */
    this.saveButton = this.querySelector('#upload-submit');
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

  /**
   * @param {boolean} flag
   */
  setLoading(flag) {
    this.saveButton.disabled = flag;
  }


  /**
   * @param {string} url
   */
  setImageUrl(url) {
    this.preview.setUrl(url);
    this.effectMenu.setImageUrl(url);
  }


  reset() {
    this.scale.reset();
    this.effectMenu.reset();
  }


  handleScaleUpdate() {
    this.preview.setScale(this.scale.value);
  }


  handleEffectLevelUpdate() {
    this.preview.setEffectLevel(this.effectLevel.get());
  }


  handleEffectMenuChange() {
    const type = this.effectMenu.getSelectedValue();

    this.preview.setEffect(type);
    this.effectLevel.preset(type);
  }
}


customElements.define(String(UploadDialog), UploadDialog);

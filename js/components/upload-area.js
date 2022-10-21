import Component, {html} from './component.js';

export default class UploadArea extends Component {
  constructor() {
    super();

    this.classList.add('img-upload');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <div class="img-upload__wrapper">
        <h2 class="img-upload__title  visually-hidden">Загрузка фотографии</h2>
        <form class="img-upload__form" id="upload-select-image" method="post" enctype="multipart/form-data" autocomplete="off">

          <!-- Изначальное состояние поля для загрузки изображения -->
          <fieldset class="img-upload__start">
            <input type="file" id="upload-file" class="img-upload__input  visually-hidden" name="filename" required>
            <label for="upload-file" class="img-upload__label  img-upload__control">Загрузить</label>
          </fieldset>

          <!-- Форма редактирования изображения -->
          <div class="img-upload__overlay  hidden">
            <div class="img-upload__wrapper">
              <div class="img-upload__preview-container">

                <!-- Изменение размера изображения -->
                <fieldset class="img-upload__scale  scale">
                  <button type="button" class="scale__control  scale__control--smaller">Уменьшить</button>
                  <input type="text" class="scale__control  scale__control--value" value="55%" title="Image Scale" name="scale" readonly>
                  <button type="button" class="scale__control  scale__control--bigger">Увеличить</button>
                </fieldset>

                <!-- Предварительный просмотр изображения -->
                <div class="img-upload__preview">
                  <img src="img/upload-default-image.jpg" alt="Предварительный просмотр фотографии">
                </div>

                <!-- Изменение глубины эффекта, накладываемого на изображение -->
                <fieldset class="img-upload__effect-level  effect-level">
                  <input class="effect-level__value" type="number" step="any" name="effect-level" value="">
                  <div class="effect-level__slider"></div>
                </fieldset>

                <!-- Кнопка для закрытия формы редактирования изображения -->
                <button type="reset" class="img-upload__cancel  cancel" id="upload-cancel">Закрыть</button>
              </div>

              <!-- Наложение эффекта на изображение -->
              <fieldset class="img-upload__effects  effects">
                <ul class="effects__list">
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-none" value="none" checked>
                    <label for="effect-none" class="effects__label">
                      <span class="effects__preview  effects__preview--none">Превью фото без эффекта</span>
                      Оригинал
                    </label>
                  </li>
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-chrome" value="chrome">
                    <label for="effect-chrome" class="effects__label">
                      <span class="effects__preview  effects__preview--chrome">Превью эффекта Хром</span>
                      Хром
                    </label>
                  </li>
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-sepia" value="sepia">
                    <label for="effect-sepia" class="effects__label">
                      <span class="effects__preview  effects__preview--sepia">Превью эффекта Сепия</span>
                      Сепия
                    </label>
                  </li>
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-marvin" value="marvin">
                    <label for="effect-marvin" class="effects__label">
                      <span class="effects__preview  effects__preview--marvin">Превью эффекта Марвин</span>
                      Марвин
                    </label>
                  </li>
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-phobos" value="phobos">
                    <label for="effect-phobos" class="effects__label">
                      <span class="effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
                      Фобос
                    </label>
                  </li>
                  <li class="effects__item">
                    <input type="radio" class="effects__radio  visually-hidden" name="effect" id="effect-heat" value="heat">
                    <label for="effect-heat" class="effects__label">
                      <span class="effects__preview  effects__preview--heat">Превью эффекта Зной</span>
                      Зной
                    </label>
                  </li>
                </ul>
              </fieldset>

              <!-- Добавление хэш-тегов и комментария к изображению -->
              <fieldset class="img-upload__text text">
                <div class="img-upload__field-wrapper">
                  <input class="text__hashtags" name="hashtags" placeholder="#ХэшТег">
                </div>
                <div class="img-upload__field-wrapper">
                  <textarea class="text__description" name="description" placeholder="Ваш комментарий..."></textarea>
                </div>
              </fieldset>

              <!-- Кнопка для отправки данных на сервер -->
              <button type="submit" class="img-upload__submit" id="upload-submit">Опубликовать</button>
            </div>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define(String(UploadArea), UploadArea);

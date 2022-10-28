import Component, {html} from './component.js';

export default class UploadEffectMenu extends Component {
  constructor() {
    super();

    this.classList.add('effects');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
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
    `;
  }
}

customElements.define(String(UploadEffectMenu), UploadEffectMenu);

/**
 * Экранирует html-символы
 * @param {string} value
 */
export const escapeHtml = (value) => {
  const pattern = /[<>&"']/g;
  const replacement = (match) => `&#${match.codePointAt(0)};`;

  return value.replace(pattern, replacement);
};


/**
 * Тег шаблонной html-строки
 * @param {TemplateStringsArray} strings
 * @param {...*} values
 * @return {string}
 */
export const html = (strings, ...values) => strings.reduce((before, after, index) => {
  const value = values[index - 1];

  return before + escapeHtml(String(value)) + after;
});


/**
 * Базовый компонент
 */
export default class Component extends HTMLElement {
  /**
   * @param {Object} [content]
   */
  constructor(content) {
    super();

    this.insertAdjacentHTML('beforeend', this.createHtml(content));

    this.addEventListener('animationend', this.handleAnimationEnd);
    this.addEventListener('load', this.handleLoad, {capture: true});
  }


  /**
   * Создаст дополнительную html-разметку
   * @param {Object} [content]
   */
  createHtml(content) {
    return content ? html`
      <pre>${JSON.stringify(content, null, 2)}</pre>
    ` : '';
  }


  /**
   * Переключит видимость компонента
   * @param {boolean} flag
   */
  display(flag) {
    this.classList.toggle('hidden', !flag);
  }


  /**
   * Применит эффект раскрытия
   * @param {number} index Индекс задержки
   */
  reveal(index) {
    this.classList.add('reveal');
    this.style.setProperty('--index', String(index));
  }


  /**
   * @param {AnimationEvent & {target: HTMLElement}} event
   */
  handleAnimationEnd(event) {
    event.target.classList.remove('reveal');
    event.target.style.removeProperty('--index');
  }

  /**
   * @param {UIEvent & {target: HTMLElement}} event
   */
  handleLoad(event) {
    event.target.closest('.lazy')?.classList.remove('lazy');
  }


  /**
   * Имя компонента в html
   */
  static get localName() {
    return this.name.replace(/(?!^)[A-Z]/g, '-$&').toLowerCase();
  }


  static toString() {
    return this.localName;
  }
}

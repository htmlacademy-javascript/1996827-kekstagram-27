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
   * Имя компонента в html
   */
  static get localName() {
    return this.name.replace(/(?!^)[A-Z]/g, '-$&').toLowerCase();
  }

  static toString() {
    return this.localName;
  }
}

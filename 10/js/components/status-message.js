import Component, {html} from './component.js';

export default class StatusMessage extends Component {
  /**
   * @param {StatusMessageContent} content
   */
  constructor(content) {
    super({
      description: '',
      ...content
    });

    this.classList.add(content.type);

    this.display(true);

    this.addEventListener('click', this.handleClick);
  }

  /**
   * @override
   * @param {StatusMessageContent} content
   */
  createHtml(content) {
    return html`
      <div class="${content.type}__inner">
        <h2 class="${content.type}__title">${content.title}</h2>
        <div class="${content.type}__description">${content.description}</div>
        <button type="button" class="${content.type}__button">${content.action}</button>
      </div>
    `;
  }

  display(flag) {
    document.body[flag ? 'append' : 'removeChild' ](this);
    document.body[flag ? 'addEventListener' : 'removeEventListener' ]('keydown', this, {capture: true});
  }

  handleClick() {
    this.display(false);
  }

  /**
   * @param {KeyboardEvent} event
   */
  handleEvent(event) {
    if (event.key.startsWith('Esc')) {
      event.stopPropagation();

      this.display(false);
    }
  }
}

customElements.define(String(StatusMessage), StatusMessage);

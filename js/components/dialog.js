import Component from './component.js';

export * from './component.js';

export default class Dialog extends Component {
  constructor() {
    super();

    this.classList.add('overlay');

    super.display(false);

    this.addEventListener('click', this.handleClick);
  }

  /**
   * @override
   * @param {boolean} flag
   */
  display(flag) {
    super.display(flag);

    document.body.classList.toggle('modal-open', flag);
    document.body[flag ? 'addEventListener' : 'removeEventListener' ]('keydown', this);
  }

  /**
   * @param {MouseEvent & {target: Element}} event
   */
  handleClick(event) {
    if (event.target.closest('.cancel')) {
      this.display(false);
    }
  }

  /**
   * @param {KeyboardEvent & {target: Element}} event
   */
  handleEvent(event) {
    if (event.keyCode === 27) {
      this.display(false);
    }
  }
}

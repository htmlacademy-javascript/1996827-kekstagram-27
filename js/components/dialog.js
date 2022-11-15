import Component from './component.js';

export * from './component.js';


/**
 * @implements {EventListenerObject}
 */
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

    this.dispatchEvent(new CustomEvent(flag ? 'open' : 'close'));
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
   * @param {KeyboardEvent & {target: {type?: string}}} event
   */
  handleEvent(event) {
    if (event.key.startsWith('Esc') && !event.target.type?.startsWith('text')) {
      this.display(false);
    }
  }
}

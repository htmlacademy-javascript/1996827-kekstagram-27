import {imageSortLabelMap} from '../maps.js';
import Component, {html} from './component.js';


const items = Object.entries(imageSortLabelMap).map(([type, label]) => ({type, label}));


export default class ImageSortMenu extends Component {
  constructor() {
    super();

    this.classList.add('img-filters', 'reveal');

    this.querySelector('form').innerHTML = items.map(this.createItemHtml).join('');

    this.addEventListener('click', this.handleClick);
  }


  /**
   * @override
   */
  createHtml() {
    return html`
      <h2 class="img-filters__title  visually-hidden">Фильтр фотографий</h2>
      <form class="img-filters__form" action="index.html" method="get" autocomplete="off"></form>
    `;
  }


  /**
   * @param {ImageSortMenuItem} item
   */
  createItemHtml(item) {
    return html`
      <button type=button class="img-filters__button" value="${item.type}">${item.label}</button>
    `;
  }


  getSelectedValue() {
    /**
     * @type {HTMLButtonElement}
     */
    const item = this.querySelector('.img-filters__button--active');

    return item?.value;
  }


  /**
   * @param {string} value
   */
  select(value) {
    const oldItem = this.querySelector('.img-filters__button--active');
    const newItem = this.querySelector(`[value="${value}"]`);

    oldItem?.classList.remove('img-filters__button--active');
    newItem?.classList.add('img-filters__button--active');

    if (oldItem !== newItem) {
      this.dispatchEvent(new CustomEvent('change'));
    }
  }


  /**
   * @param {MouseEvent & {target: HTMLButtonElement}} event
   */
  handleClick(event) {
    /**
     * @type {HTMLButtonElement}
     */
    const item = event.target.closest('.img-filters__button');

    if (item) {
      this.select(item.value);
    }
  }
}


customElements.define(String(ImageSortMenu), ImageSortMenu);

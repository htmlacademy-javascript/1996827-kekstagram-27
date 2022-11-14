import { ImageSortLabel, ImageSortType } from '../enums.js';
import Component, {html} from './component.js';

const items = Object.keys(ImageSortType).map((key) => ({
  type: ImageSortType[key],
  label: ImageSortLabel[key]
}));

export default class ImageSortMenu extends Component {
  constructor() {
    super();

    this.querySelector('form').innerHTML = items.map(this.createItemHtml).join('');
    // this.reset();

    this.querySelector('.img-filters__button').classList.add('img-filters__button--active');

    // this.querySelector('button').addEventListener('click', this.handleButtonFilterClick);
    document.addEventListener('click', this.handleButtonFilterClick);
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
        <button type=button class="img-filters__button  " id="filter-${item.type}">${item.label}</button>
    `;
  }

  handleButtonFilterClick(event) {
    if (event.target.classList.contains('img-filters__button')) {
      console.log(event.target.id);
    }
  }
}

customElements.define(String(ImageSortMenu), ImageSortMenu);

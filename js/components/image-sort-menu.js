import Component, {html} from './component.js';
import ImageGallery from './image-gallery.js';

export default class ImageSortMenu extends Component {
  constructor() {
    super();

    // this.classList.add('img-filters--inactive');

    const button = this.querySelector('button');

    button.addEventListener('click', this.handleButtonFilterClick);
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <h2 class="img-filters__title  visually-hidden">Фильтр фотографий</h2>
      <form class="img-filters__form" action="index.html" method="get" autocomplete="off">
        <button type=button class="img-filters__button  img-filters__button--active" id="filter-default">По умолчанию</button>
        <button type=button class="img-filters__button" id="filter-random">Случайные</button>
        <button type=button class="img-filters__button" id="filter-discussed">Обсуждаемые</button>
      </form>
    `;
  }

  reset() {
    this.reset();
  }

  handleButtonFilterClick() {

    console.log(this.id);

  }
}

customElements.define(String(ImageSortMenu), ImageSortMenu);

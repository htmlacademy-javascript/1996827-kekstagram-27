import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import ImageSortMenu from './components/image-sort-menu.js';
import StatusMessage from './components/status-message.js';
import {ImageSortCompare, ImageSortLimit, ImageSortType} from './enums.js';
import {findKey, request, debounce} from './utils.js';


const BASE_URL = 'https://27.javascript.pages.academy/kekstagram';
const IMAGES_URL = `${BASE_URL}/data`;

/**
 * @type {ImageSortMenu}
 */
const menu = document.querySelector(String(ImageSortMenu));

/**
 * @type {ImageGallery}
 */
const gallery = document.querySelector(String(ImageGallery));

const {upload} = gallery;

/**
 * @type {ImageDialog}
 */
const dialog = document.querySelector(String(ImageDialog));

/**
 * @param {ImageState[]} images
 */
const createMenuChangeHandler = (images) => debounce(() => {
  const key = findKey(ImageSortType, menu.getSelectedValue());
  const newImages = [...images].sort(ImageSortCompare[key]).slice(0, ImageSortLimit[key]);

  gallery.setContent(newImages);
});

/**
 * @param {CustomEvent<ImageState>} event
 */
const handleGalleryItemClick = (event) => {
  dialog.setContent(event.detail);
  dialog.display(true);
};

/**
 * @param {FormDataEvent} event
 */
const handleUploadFormData = (event) => {
  upload.dialog.setLoading(true);

  request(BASE_URL, {
    method: 'POST',
    body: event.formData
  })

    .then(() => {
      upload.dialog.display(false);

      new StatusMessage({
        type: 'success',
        title: 'Изображение успешно загружено',
        action: 'Круто!'
      });
    })

    .catch(() => {
      new StatusMessage({
        type: 'error',
        title: 'Ошибка загрузки файла',
        action: 'Попробовать ещё раз'
      });
    })

    .finally(() => {
      upload.dialog.setLoading(false);
    });
};


request(IMAGES_URL)

  .then((images) => {
    menu.addEventListener('change', createMenuChangeHandler(images));
    menu.select(ImageSortType.DEFAULT);
    menu.reveal(0);

    gallery.addEventListener('itemclick', handleGalleryItemClick);
  })

  .catch((error) => {
    new StatusMessage({
      type: 'error',
      title: 'Ошибка',
      description: error.stack,
      action: 'Закрыть'
    });
  })

  .finally(() => {
    upload.reveal(5);
    upload.addEventListener('formdata', handleUploadFormData);
  });

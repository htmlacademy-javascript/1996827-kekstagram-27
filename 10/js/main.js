import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import StatusMessage from './components/status-message.js';
// import generateImageStates from './images-generator.js';
import {request, traceEvent} from './utils.js';

// const images = generateImageStates();

const BASE_URL = 'https://27.javascript.pages.academy/kekstagram';
const IMAGES_URL = `${BASE_URL}/data`;


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
    });
};


request(IMAGES_URL)

  .then((images) => {
    gallery.setContent(images);
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

  .then(() => {
    upload.addEventListener('formdata', handleUploadFormData);
  });


addEventListener('change', traceEvent, {capture: true});
addEventListener('open', traceEvent, {capture: true});
addEventListener('close', traceEvent, {capture: true});
addEventListener('click', traceEvent, {capture: true});

// const {upload} = gallery;
// upload.dialog.display(true);

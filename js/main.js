import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import ImageSortMenu from './components/image-sort-menu.js';
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

  document.querySelector('.img-filters--inactive').classList.remove('img-filters--inactive');

};


request(IMAGES_URL)

  .then((images) => {
    gallery.setContent(images);
    gallery.addEventListener('itemclick', handleGalleryItemClick);

    // for random
    // gallery.setContent(images.slice(0, 10).sort(() => Math.random() - 0.5));
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


// document.querySelector('#filter-default').addEventListener('click', () => {
//   console.log('default');
// });

// document.querySelector('#filter-random').addEventListener('click', () => {
//   console.log('random');
// });

// document.querySelector('#filter-discussed').addEventListener('click', () => {
//   console.log('discussed');
// });


/**
 * @type {*}
 */
const uploadImgElement = document.querySelector('#upload-file');

/**
 * @type {*}
 */
const previewImageElement = document.querySelector('.img-upload__preview img');

uploadImgElement.addEventListener('change', () => {
  const file = uploadImgElement.files[0];
  previewImageElement.src = URL.createObjectURL(file);
});


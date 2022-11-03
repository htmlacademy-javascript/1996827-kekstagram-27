import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import generateImageStates from './images-generator.js';
import { traceEvent } from './utils.js';


const images = generateImageStates();

/**
 * @type {ImageGallery}
 */
const gallery = document.querySelector(String(ImageGallery));
const {upload} = gallery;

// upload.dialog.display(true);

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

gallery.setContent(images);

gallery.addEventListener('itemclick', handleGalleryItemClick);


addEventListener('change', traceEvent, {capture: true});
addEventListener('open', traceEvent, {capture: true});
addEventListener('close', traceEvent, {capture: true});
addEventListener('click', traceEvent, {capture: true});


dialog.setContent(images[10]);
dialog.display(true);

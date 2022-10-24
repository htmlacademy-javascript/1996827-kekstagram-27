import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import generateImageStates from './images-generator.js';


const images = generateImageStates();
console.log(images);

/**
 * @type {ImageGallery}
 */
const gallery = document.querySelector(String(ImageGallery));

/**
 * @type {ImageDialog}
 */
const dialog = document.querySelector(String(ImageDialog));

/**
 * @param {CustomEvent<ImageState>} event
 */
const handleGalleryItemClick = (event) => {
  console.log(event.detail);
  dialog.setContent(event.detail);
  dialog.display(true);
};

gallery.setContent(images);

gallery.addEventListener('itemclick', handleGalleryItemClick);


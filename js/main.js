import ImageGallery from './components/image-gallery.js';
import generateImageStates from './images-generator.js';


const images = generateImageStates();

/**
 * @type {ImageGallery}
 */
const gallery = document.querySelector(String(ImageGallery));


gallery.setContent(images);


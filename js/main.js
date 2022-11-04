import ImageDialog from './components/image-dialog.js';
import ImageGallery from './components/image-gallery.js';
import generateImageStates from './images-generator.js';
import { traceEvent } from './utils.js';


const images = generateImageStates();

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
  dialog.setContent(event.detail);
  dialog.display(true);
};

gallery.setContent(images);
gallery.addEventListener('itemclick', handleGalleryItemClick);


addEventListener('change', traceEvent, {capture: true});
addEventListener('open', traceEvent, {capture: true});
addEventListener('close', traceEvent, {capture: true});
addEventListener('click', traceEvent, {capture: true});

const {upload} = gallery;
upload.dialog.display(true);

// SCALE IMAGE
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');


const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;

scaleControlValue.value = 100;
let scale = Number(scaleControlValue.value);
scale = 100;


const scalePreview = () => {
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
};


function scaleControlDown() {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    scaleControlValue.value = scale;
  }
  scalePreview();
}

function scaleControlUp() {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    scaleControlValue.value = scale;
  }
  scalePreview();
}

scaleControlSmaller.addEventListener('click', scaleControlDown);
scaleControlBigger.addEventListener('click', scaleControlUp);



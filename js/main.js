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
/**
 * @type {HTMLInputElement}
 */
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;


let scale = 100;
scaleControlValue.value = `${scale}%`;

const scalePreview = () => {
  scaleControlValue.value = `${scale}%`;
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
};

function scaleControlDownHandler() {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
  }
  scalePreview();
}

function scaleControlUpHandler() {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
  }
  scalePreview();
}

scaleControlSmaller.addEventListener('click', scaleControlDownHandler);
scaleControlBigger.addEventListener('click', scaleControlUpHandler);


// FILTERS

const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const effectLevel = sliderContainer.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: '',
    style: 'none',
  },
  {
    name: 'chrome',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: '',
    style: 'grayscale',
  },
  {
    name: 'sepia',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: '',
    style: 'sepia',
  },
  {
    name: 'marvin',
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    unit: '%',
    style: 'invert',
  },
  {
    name: 'phobos',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    unit: 'px',
    style: 'blur',
  },
  {
    name: 'heat',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    unit: '',
    style: 'brightness',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let selectedEffect = DEFAULT_EFFECT;
let currentEffect;

sliderContainer.classList.add('hidden');

const EffectChange = (event) => {
  // scale = 100;
  // scaleControlValue.value = `${scale}%`;
  // imgUploadPreview.style.transform = `scale(${scale / 100})`;


  imgUploadPreview.classList.remove(`effects__preview--${currentEffect}`);
  currentEffect = event.target.value;
  selectedEffect = EFFECTS.find((effect) => effect.name === event.target.value);

  sliderContainer.classList.add('hidden');
  imgUploadPreview.style.filter = 'none';

  if (selectedEffect.name !== 'none') {
    sliderContainer.classList.remove('hidden');
    imgUploadPreview.classList.add(`effects__preview--${currentEffect}`);

    slider.noUiSlider.updateOptions({
      range: {
        min: selectedEffect.min,
        max: selectedEffect.max,
      },
      start: selectedEffect.start,
      step: selectedEffect.step,
    });
  }
};

noUiSlider.create(slider, {
  range: {
    min: selectedEffect.min,
    max: selectedEffect.max,
  },
  start: selectedEffect.start,
  step: selectedEffect.step,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  effectLevel.value = slider.noUiSlider.get();

  if (selectedEffect) {
    imgUploadPreview.style.filter = `${selectedEffect.style}(${effectLevel.value}${selectedEffect.unit})`;
  }

  // console.log('style: ' + imgUploadPreview.style.filter);
  // console.log(`${chosenEffect.style}(${effectLevel.value}${chosenEffect.unit})`);

});

effectsList.addEventListener('change', EffectChange);


import {ImageSortType, UploadEffectType} from './enums.js';

export const imageSortLabelMap = {
  [ImageSortType.DEFAULT]: 'По умолчанию',
  [ImageSortType.RANDOM]: 'Случайные',
  [ImageSortType.DISCUSSED]: 'Обсуждаемые'
};

export const imageSortCompareMap = {
  [ImageSortType.DEFAULT]: () => 0,
  [ImageSortType.RANDOM]: () => Math.random() - .5,
  [ImageSortType.DISCUSSED]: (image, nextImage) => nextImage.comments.length - image.comments.length
};

export const imageSortLimitMap = {
  [ImageSortType.DEFAULT]: Infinity,
  [ImageSortType.RANDOM]: 10,
  [ImageSortType.DISCUSSED]: Infinity
};

export const uploadEffectLabelMap = {
  [UploadEffectType.NONE]: 'Оригинал',
  [UploadEffectType.CHROME]: 'Хром',
  [UploadEffectType.SEPIA]: 'Сепия',
  [UploadEffectType.MARVIN]: 'Марвин',
  [UploadEffectType.PHOBOS]: 'Фобос',
  [UploadEffectType.HEAT]: 'Зной'
};

export const uploadEffectCssFilterMap = {
  [UploadEffectType.NONE]: '',
  [UploadEffectType.CHROME]: 'grayscale(0)',
  [UploadEffectType.SEPIA]: 'sepia(0)',
  [UploadEffectType.MARVIN]: 'invert(0%)',
  [UploadEffectType.PHOBOS]: 'blur(0px)',
  [UploadEffectType.HEAT]: 'brightness(0)'
};

export const uploadEffectRangeMap = {
  [UploadEffectType.NONE]: [0, 100, 1],
  [UploadEffectType.CHROME]: [0, 1, .1],
  [UploadEffectType.SEPIA]: [0, 1, .1],
  [UploadEffectType.MARVIN]: [0, 100, 1],
  [UploadEffectType.PHOBOS]: [0, 3, .1],
  [UploadEffectType.HEAT]: [1, 3, .1]
};

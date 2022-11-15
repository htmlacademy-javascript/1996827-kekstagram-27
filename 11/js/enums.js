export const ImageSortType = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

export const ImageSortLabel = {
  DEFAULT: 'По умолчанию',
  RANDOM: 'Случайные',
  DISCUSSED: 'Обсуждаемые'
};

export const ImageSortCompare = {
  DEFAULT: () => 0,
  RANDOM: () => Math.random() - .5,
  DISCUSSED: (image, nextimage) => nextimage.comments.length - image.comments.length
};

export const ImageSortLimit = {
  DEFAULT: Infinity,
  RANDOM: 10,
  DISCUSSED: Infinity
};

export const UploadEffectType = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const UploadEffectLabel = {
  NONE: 'Оригинал',
  CHROME: 'Хром',
  SEPIA: 'Сепия',
  MARVIN: 'Марвин',
  PHOBOS: 'Фобос',
  HEAT: 'Зной'
};

export const UploadEffectCssFilter = {
  NONE: '',
  CHROME: 'grayscale(0)',
  SEPIA: 'sepia(0)',
  MARVIN: 'invert(0%)',
  PHOBOS: 'blur(0px)',
  HEAT: 'brightness(0)'
};

export const UploadEffectRange = {
  NONE: [0, 100, 1],
  CHROME: [0, 1, .1],
  SEPIA: [0, 1, .1],
  MARVIN: [0, 100, 1],
  PHOBOS: [0, 3, .1],
  HEAT: [1, 3, .1]
};


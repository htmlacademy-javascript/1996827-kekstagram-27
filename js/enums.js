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

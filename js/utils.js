/**
 * Отправит запрос на сервер
 * @param {string} url
 * @param {RequestInit} [options]
 */
export const request = (url, options) => fetch(url, options).then((response) => {
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  if (response.headers.get('content-type').startsWith('application/json')) {
    return response.json();
  }

  return response.text();
});

/**
 * Ограничит частоту вызова `callback`
 * @param {Function} callback
 * @param {number} maxFreq
 */
export const debounce = (callback, maxFreq = 500) => {
  let id = null;
  let lastCallDate = null;

  return (...rest) => {
    clearTimeout(id);

    id = setTimeout(() => {
      callback(...rest);
      lastCallDate = Date.now();

    }, maxFreq - Math.min(maxFreq, Date.now() - lastCallDate));
  };
};

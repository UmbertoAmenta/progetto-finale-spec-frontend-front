export default function debounce(callback, delay) {
  let timer;

  return (...value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...value);
    }, delay);
  };
}

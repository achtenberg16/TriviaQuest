export function setLocalStorage(key, value) {
  console.log('rodou', value);
  localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

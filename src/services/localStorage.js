export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

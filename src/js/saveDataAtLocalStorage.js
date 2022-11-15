export function saveDataAtLocalStorage(items) {
  for (let item of items) {
    const jobData = JSON.stringify(item);
    const key = JSON.stringify(item.id);
    localStorage.setItem(key, jobData);
  }
}

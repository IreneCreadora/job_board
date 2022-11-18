export function renderPicturesMarkup(arr) {
  let markupList = [];

  for (let elem of arr) {
    const elemMarkup = `<img src="${elem}" alt="Company image" loading="lazy">`;
    markupList.push(elemMarkup);
  }
  return markupList;
}

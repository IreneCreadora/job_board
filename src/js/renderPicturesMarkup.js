export function renderPicturesMarkup(arr) {
  let markupList = [];
  console.log(arr);
  for (let elem of arr) {
    console.log(elem);
    const elemMarkup = `<img src="${elem}" alt="Company image" loading="lazy">`;
    markupList.push(elemMarkup);
  }
  return markupList;
}

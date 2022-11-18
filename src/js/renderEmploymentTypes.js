export function renderEmploymentTypes(arr) {
  let markupList = [];

  for (let elem of arr) {
    const elemMarkup = `<li class="employment">${elem}</li>`;
    markupList.push(elemMarkup);
  }
  return markupList;
}

export function renderBenefits(arr) {
  let markupList = [];
  console.log(arr);
  for (let elem of arr) {
    console.log(elem);
    const elemMarkup = `<li class="benefits">${elem}</li>`;
    markupList.push(elemMarkup);
  }
  return markupList;
}

export function renderBenefits(arr) {
  let markupList = [];
  
  for (let elem of arr) {
    const elemMarkup = `<li class="benefits">${elem}</li>`;
    markupList.push(elemMarkup);
  }
  return markupList;
}

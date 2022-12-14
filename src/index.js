import { createMarkup } from './js/createMarkup';
import { JobsAPI } from './js/jobs-API.js';
import { refs } from './js/refs.js';
import { saveDataAtLocalStorage } from './js/saveDataAtLocalStorage';

export const jobsList = new JobsAPI();

const renderJobsList = async function () {
  try {
    const items = await jobsList.getJobsList();

    saveDataAtLocalStorage(items);

    const markup = await Promise.all(items.map(createMarkup));
    
    refs.board.insertAdjacentHTML('beforeend', markup.join(''));
  } catch (error) {
    console.log(error);
  }
};

function onTitleClick(e) {
  const currentId = e.target.closest('li').dataset.id;
  const title = e.target.closest('.job__title');
  if (!title) {
    return;
  }
  localStorage.setItem('currentID', JSON.stringify(currentId));
}

refs.board.addEventListener('click', onTitleClick);

renderJobsList();

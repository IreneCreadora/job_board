import { createMarkupCurrentJob } from './js/createMarkupCurrentJob';
import { refs } from './js/refs.js';

function openPage() {
  renderJobDetails(localStorage.getItem('currentID'));
}

function renderJobDetails(currentId) {
  try {
    const currentJobData = localStorage.getItem(currentId);
    const markup = createMarkupCurrentJob(JSON.parse(currentJobData));
    refs.jobDetailsContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
openPage();

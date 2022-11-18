import { createMarkupCurrentJob } from './js/createMarkupCurrentJob';
import { refs } from './js/refs.js';

function openPage() {
  renderJobDetails(localStorage.getItem('currentID'));
}

async function renderJobDetails(currentId) {
  try {
    const currentJobData = localStorage.getItem(currentId);

    const markup = await createMarkupCurrentJob(JSON.parse(currentJobData));

    refs.jobDetailsContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
openPage();

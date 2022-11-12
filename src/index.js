import { createMarkup } from './js/createMarkup';
import { JobsAPI } from './js/jobs-API.js';
import { refs } from './js/refs.js';
import axios from 'axios';

const jobsList = new JobsAPI();

const letsgo = async function () {
  try {
    const items = await jobsList.getJobsList();
    const markup = items.map(createMarkup);
    refs.board.insertAdjacentHTML('beforeend', markup.join(''));
  } catch (error) {
    console.log(error);
  }
};
letsgo();

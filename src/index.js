import { createMarkup } from './js/createMarkup';
import { JobsAPI } from './js/jobs-API.js';
import { refs } from './js/refs.js';
import axios from 'axios';

const jobsList = new JobsAPI();

// createMarkup(jobsList.getJobsList());
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
// async function onFormSubmit(e) {
//   e.preventDefault();

//   const {
//     elements: { searchQuery },
//   } = e.currentTarget;
//   const userQuery = searchQuery.value.trim().toLowerCase().split(' ').join('+');
//   if (!userQuery) {
//     Notify.failure(
//       `Sorry, there are no images matching your search query. Please try again.`,
//       notifyOptions
//     );
//     return;
//   }
//   pixabay.query = userQuery;

//   clearPage();

//   try {
//     const { hits, totalHits } = await pixabay.getImages();
//     if (hits.length === 0) {
//       Notify.info(
//         `Sorry, there are no images matching your search query "${userQuery}". Please try again.  `,
//         notifyOptions
//       );
//       return;
//     }
//     const markup = [...hits].map(createMarkup);
//     refs.gallery.insertAdjacentHTML('beforeend', markup.join(''));
//     lightBox.refresh();

//     pixabay.calculateTotalPages(totalHits);

//     Notify.success(
//       `Hooray! We found ${totalHits} images by ${userQuery}`,
//       notifyOptions
//     );

//     if (pixabay.isShowLoadMore) {
//       const target = document.querySelector('.gallery-card:last-child');
//       console.log(target);
//       io.observe(target);
//     }
//   } catch (error) {
//     Notify.failure(`${error.message}`, notifyOptions);
//     clearPage();
//   }
// }

// refs.form.addEventListener('submit', onFormSubmit);

// function clearPage() {
//   pixabay.resetPage();
//   refs.gallery.innerHTML = '';
//   refs.loadMoreBtn.classList.add('is-hidden');
// }

import { formatDistance, subDays } from 'date-fns';

export function createMarkupCurrentJob({
  id,
  name,
  email,
  phone,
  title,
  salary,
  address,
  benefits,
  location,
  pictures,
  createdAt,
  updatedAt,
  description,
  employment_type,
}) {
  const postedTime = formatDistance(new Date(createdAt), Date.now(), {
    addSuffix: true,
  });
  return `<div class="vacancy__item" data-id="${id}">
  <div class="vacancy__links">
  <button class="vacancy__btn"><i class="fa-regular fa-bookmark"></i> Save to my list</button>
  <button class="vacancy__btn"><i class="fa-solid fa-share-nodes"></i> Share</button></div>
  <button class="vacancy__btn-apply desktop-btn-apply">Apply now</button>
  <div class="main-info__wrapper">
  <h2 class="vacancy__title">${title}</h2>
  <p class="vacancy__time">Posted ${postedTime}
  </p>
  <div class="salary__wrapper">
  <span>Brutto, per year
  </span>
  <p class="vacancy__salary">${salary} €
  </p>
  </div>
  </div>
  <p class="vacancy__description">${description}
  </p>
  <button class="vacancy__btn-apply">Apply now</button>
      <h3 class="vacancy__image-title">Attached images
      </h3>
      <hr />  
      <div class="vacancy__image">    
      <img src="${pictures[0]}" alt="Company image" loading="lazy">
      <img src="${pictures[1]}" alt="Company image" loading="lazy">
      <img src="${pictures[2]}" alt="Company image" loading="lazy">
      </div>
      <div class="vacancy__info">
      <h3 class="vacancy__info-title">Additional info
      </h3>
      <hr />      
      <p class="vacancy__info-text">Employment type</p>
      <ul>
      <li class="employment">${employment_type[0]}</li>
      <li class="employment">${employment_type[1]}</li>
      </ul>
      <p class="vacancy__info-text">Benefits</p>
      <ul>
      <li class="benefits">${benefits[0]}</li>
      <li class="benefits">${benefits[1]}</li>
      </ul>
      </div>
      <div class="vacancy__contacts">
      <h3 class="vacancy__contacts-title">Contacts
      </h3>
      <hr />
      <div class="vacancy__contacts-wrapper">
      <p class="vacancy__company">${name}
      </p>
      <p class="vacancy__address"><i class="fa-solid fa-location-dot"></i>${address}
      </p>
      <p class="vacancy__phone">${phone}
      </p>
      <p class="vacancy__email">${email}
      </p>
      </div> 
      </div>
      <a
  href="./index.html"
  target="_self"
  rel="noopener noreferrer"
  title="Return to jobs board"
  class="btn-return"
> <i class="fa-solid fa-chevron-left"></i> Return to job board
</a>
  </div>`;
}

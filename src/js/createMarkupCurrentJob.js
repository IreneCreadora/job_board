import { formatDistance } from 'date-fns';
import { renderEmploymentTypes } from './renderEmploymentTypes';
import { renderBenefits } from './renderBenefits';
import { renderPicturesMarkup } from './renderPicturesMarkup';
import { getLocationAddress } from './getLocationAddress';

export async function createMarkupCurrentJob({
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
  const convertedSalary = salary.replaceAll('k', ' 000');
  const employmentTypesMarkup = renderEmploymentTypes(employment_type).join('');
  const benefitsMarkup = renderBenefits(benefits).join('');
  const picturesMarkup = renderPicturesMarkup(pictures).join('');

  // const jobAddress = await getLocationAddress( location.lat , location.long );
  // В теорії тут у функцію я передаю дані з бекенду, але цифри які приходять, нажаль не валідні,
  // я провела тест і всі дані які приходили в різний час, в гугл пошуку видавали координати океанів,
  // тому країни і міста там у відповіді немає.
  // Для того щоб показати мій варіант обробки даних, я використала валідні координати.
  const jobAddress = await getLocationAddress();

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
  <p class="vacancy__salary"> € ${convertedSalary}
  </p>
  </div>
  </div>
  <p class="vacancy__description">${description}
  </p>
  <button class="vacancy__btn-apply">Apply now</button>
  <div class="vacancy__advantages">
  <div>
      <h3 class="vacancy__image-title">Attached images
      </h3>
      <hr />  
      <div class="vacancy__image">${picturesMarkup}
      </div>
      </div>
      <div class="vacancy__info">
      <h3 class="vacancy__info-title">Additional info
      </h3>
      <hr />      
      <p class="vacancy__info-text">Employment type</p>
      <ul>${employmentTypesMarkup}
      </ul>
      <p class="vacancy__info-text">Benefits</p>
      <ul>${benefitsMarkup}  
      </ul>
      </div>
      </div>
      <div class="vacancy__contacts">
      <h3 class="vacancy__contacts-title">Contacts
      <hr />
      </h3>      
      <div class="vacancy__contacts-wrapper">
      <p class="vacancy__company">${name}
      </p>
      <p class="vacancy__address"><i class="fa-solid fa-location-dot"></i>${jobAddress}, ${address}
      </p>
      <p class="vacancy__phone">${phone}
      </p>
      <p class="vacancy__email">${email}
      </p>
      </div> 
      </div>
  </div>`;
}
